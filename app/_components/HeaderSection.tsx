import SortSelect from './SortSelect';

interface HeaderSectionProps {
	selectedCategory: string;
	selectedTag: string;
}
export default function HeaderSection({ selectedCategory, selectedTag }: HeaderSectionProps) {
	let content = '';
	if (selectedTag) {
		content = `${selectedTag} 관련 글`;
	} else {
		content = selectedCategory === '전체' ? '전체 블로그 목록' : `${selectedCategory} 관련 글`;
	}

	return (
		<div className="flex items-center justify-between">
			<h2 className="text-2xl font-bold tracking-tight md:text-3xl">{content}</h2>
			<SortSelect />
		</div>
	);
}
