import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CalendarIcon, UserIcon, ClockIcon, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

interface BlogPostProps {
	params: Promise<{ slug: string[] }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
	const slug = (await params).slug;
	return (
		<div className="container flex h-full flex-col gap-2 space-y-4 px-4 py-8">
			{/* 헤더 */}
			<div className="flex flex-col gap-2">
				<Badge>프론트엔드</Badge>
				<h1 className="text-3xl font-bold">Next.js와 Shadcn UI를 활용한 블로그 만들기 {slug}</h1>
				<div className="flex flex-row gap-3">
					<div className="text-muted-foreground flex items-center gap-3 text-sm">
						<div className="flex items-center gap-1">
							<CalendarIcon className="h-4 w-4" />
							<span>2025-05-21</span>
						</div>
						<div className="flex items-center gap-1">
							<UserIcon className="h-4 w-4" />
							<span>전윤호</span>
						</div>
						<div className="flex items-center gap-1">
							<ClockIcon className="h-4 w-4" />
							<span>5분 읽기</span>
						</div>
					</div>
				</div>
			</div>
			<Separator className="" />

			{/* 본문 */}
			<div className="flex-1">
				<main>
					프로필 이미지를 사용하기 위해서는 /public 폴더에 profile-placeholder.jpg를 추가하거나,
					실제 프로필 이미지 경로로 수정하시면 됩니다. 추가로 수정하고 싶은 부분이 있다면 말씀해
					주세요!
				</main>
			</div>
			<Separator className="" />

			{/* 다음화면 */}
			<div className="flex h-30 gap-5">
				<Link href="/blog/3" className="w-1/2">
					<Button className="hover:bg-muted/50 flex h-full flex-col items-start gap-4 overflow-hidden border-2 bg-transparent text-black">
						<div className="flex flex-row items-center gap-2 font-bold">
							<ChevronLeft className="h-4 w-4" />
							<div>이전화면</div>
						</div>
						<div className="line-clamp-2 w-full text-xs break-words text-ellipsis whitespace-normal text-gray-500">
							화면 샘플내용 입니다. 이전 화면 샘플내용 입니다. 이전 화면 샘플내용 입니다. 이전 화면
							샘플내용 입니다. 이전 화면 샘플내용 입니다. 이전 화면 샘플내용 입니다. 이전 화면
							샘플내용 입니다. 이전 화면 샘플내용 입니다. 이전 화면 샘플내용 입니다. 화면 샘플내용
							입니다. 이전 화면 샘플내용 입니다. 이전 화면 샘플내용 입니다. 이전 화면 샘플내용
							입니다. 이전 화면 샘플내용 입니다. 이전 화면 샘플내용 입니다. 이전 화면 샘플내용
							입니다. 이전 화면 샘플내용 입니다. 이전 화면 샘플내용 입니다.
						</div>
					</Button>
				</Link>
				<Link href="/blog/2" className="w-1/2">
					<Button className="hover:bg-muted/50 flex h-full flex-col items-end gap-4 overflow-hidden border-2 bg-transparent text-ellipsis text-black">
						<div className="flex flex-row items-center gap-2">
							<div className="font-bold">다음화면</div>
							<ChevronRight className="h-4 w-4" />
						</div>
						<div className="line-clamp-2 w-full text-end text-xs break-words text-ellipsis whitespace-normal text-gray-500">
							부모 요소의 높이 제한 버튼(Button)에 h-20(고정 높이)이 적용되어 있어, 내부 텍스트가 두
							줄로 늘어나도 공간이 부족하면 줄바꿈이 일어나지 않을 수 있습니다. flex와 min-w-0 조합
							flex 컨테이너에서 자식 요소가 min-w-0이 아니면 줄바꿈이 안 될 수 있지만, 이미
							min-w-0을 적용했습니다. Tailwind 플러그인 미설치 line-clamp 유틸리티는 Tailwind CSS의
							공식 플러그인(@tailwindcss/line-clamp)이 설치되어 있어야 동작합니다.
							tailwind.config.js의 plugins에 require가 포함되어 있어야 합니다.
						</div>
					</Button>
				</Link>
			</div>
		</div>
	);
}
