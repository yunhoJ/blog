// 'use client';
// import { Post } from '@/types/blog';
// import Link from 'next/link';
// import PostCard from './PostCard';
// import { useEffect, useState } from 'react';
// // import { getPublishedPosts } from '@/lib/notion';

// export default function PoasList() {
// 	const [posts, setPosts] = useState<Post[]>([]);

// 	useEffect(() => {
// 		const fetchPosts = async () => {
// 			const response = await fetch('/api/posts');
// 			const data = await response.json();
// 			setPosts(data.posts);
// 		};
// 		fetchPosts();
// 	}, []);

// 	return (
// 		<div className="flex flex-col gap-4">
// 			{posts.map((post, index) => (
// 				<Link href={`/blog/${post.slug}`} key={post.id}>
// 					{/* <PostCard post={post} isFirst={index === 0} /> */}
// 				</Link>
// 			))}
// 		</div>
// 	);
// }
