import { Post, TagFilterItem } from '@/types/blog';
import { Client, PageObjectResponse, PersonUserObjectResponse } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({
	auth: process.env.NOTION_API_KEY,
});

export const n2m = new NotionToMarkdown({ notionClient: notion });

function getPostMetadata(page: PageObjectResponse): Post {
	const { properties } = page;

	const getCoverImage = (cover: PageObjectResponse['cover']) => {
		if (!cover) return '';

		switch (cover.type) {
			case 'external':
				return cover.external.url;
			case 'file':
				return cover.file.url;
			default:
				return '';
		}
	};

	return {
		id: page.id,
		title: properties.Title.type === 'title' ? (properties.Title.title[0]?.plain_text ?? '') : '',
		description:
			properties.Description.type === 'rich_text'
				? (properties.Description.rich_text[0]?.plain_text ?? '')
				: '',
		coverImage: getCoverImage(page.cover),
		tags:
			properties.Tags.type === 'multi_select'
				? properties.Tags.multi_select.map((tag) => tag.name)
				: [],
		author:
			properties.Author.type === 'people'
				? ((properties.Author.people[0] as PersonUserObjectResponse)?.name ?? '전윤호')
				: '',

		date: properties.Date.type === 'date' ? (properties.Date.date?.start ?? '') : '',
		modifiedDate: page.last_edited_time,
		slug:
			properties.Slug.type === 'rich_text'
				? (properties.Slug.rich_text[0]?.plain_text ?? page.id)
				: page.id,
	};
}

export const getPostBySlug = async (slug: string): Promise<{ markdown: string; post: Post }> => {
	const response = await notion.databases.query({
		database_id: process.env.NOTION_DATABASE_ID!,
		filter: {
			and: [
				{
					property: 'Slug',
					rich_text: {
						equals: slug,
					},
				},
				{
					property: 'Status',
					select: {
						equals: 'Published',
					},
				},
			],
		},
	});
	const mdblocks = await n2m.pageToMarkdown(response.results[0].id);
	const { parent } = n2m.toMarkdownString(mdblocks);

	return {
		markdown: parent,
		post: getPostMetadata(response.results[0] as PageObjectResponse),
	};
};

export interface GetPublishedPostsProps {
	tag?: string;
	sort?: string;
	pageSize?: number;
	startCursor?: string;
}

export interface GetPublishedPostsResponse {
	posts: Post[];
	hasMore: boolean;
	nextCursor: string | null;
}

export const getPublishedPosts = async ({
	tag = '전체',
	sort = 'latest',
	pageSize = 2,
	startCursor,
}: GetPublishedPostsProps): Promise<GetPublishedPostsResponse> => {
	const response = await notion.databases.query({
		database_id: process.env.NOTION_DATABASE_ID!,
		filter: {
			property: 'Status',
			select: {
				equals: 'Published',
			},
			and: [
				{
					property: 'Status',
					select: {
						equals: 'Published',
					},
				},
				...(tag && tag !== '전체'
					? [
							{
								property: 'Tags',
								multi_select: {
									contains: tag,
								},
							},
						]
					: []),
			],
		},
		sorts: [
			{
				property: 'Date',
				direction: sort === 'latest' ? 'descending' : 'ascending',
			},
		],
		page_size: pageSize,
		start_cursor: startCursor,
	});

	const posts = response.results
		.filter((page): page is PageObjectResponse => 'properties' in page)
		.map(getPostMetadata);

	return {
		posts,
		hasMore: response.has_more,
		nextCursor: response.next_cursor,
	};
};
export const getTags = async (): Promise<TagFilterItem[]> => {
	const response = await getPublishedPosts({ pageSize: 100 });
	const posts = response.posts;

	// 모든 태그를 추출하고 각 태그의 출현 횟수를 계산
	const tagCount = posts.reduce(
		(acc, post) => {
			post.tags?.forEach((tag) => {
				acc[tag] = (acc[tag] || 0) + 1;
			});
			return acc;
		},
		{} as Record<string, number>
	);

	// TagFilterItem 형식으로 변환
	const tags: TagFilterItem[] = Object.entries(tagCount).map(([name, count]) => ({
		id: name,
		name,
		count,
	}));

	// "전체" 태그 추가
	tags.unshift({
		id: 'all',
		name: '전체',
		count: posts.length,
	});

	// 태그 이름 기준으로 정렬 ("전체" 태그는 항상 첫 번째에 위치하도록 제외)
	const [allTag, ...restTags] = tags;
	const sortedTags = restTags.sort((a, b) => a.name.localeCompare(b.name));

	return [allTag, ...sortedTags];
};

export interface CreatePostParams {
	title: string;
	tag: string;
	content: string;
}

export const createPost = async ({ title, tag, content }: CreatePostParams) => {
	const response = await notion.pages.create({
		parent: {
			database_id: process.env.NOTION_DATABASE_ID!,
		},
		properties: {
			Title: {
				title: [
					{
						text: {
							content: title,
						},
					},
				],
			},
			Description: {
				rich_text: [
					{
						text: {
							content: content,
						},
					},
				],
			},
			Tags: {
				multi_select: [{ name: tag }],
			},
			Status: {
				select: {
					name: 'Published',
				},
			},
			Date: {
				date: {
					start: new Date().toISOString(),
				},
			},
		},
	});

	return response;
};
