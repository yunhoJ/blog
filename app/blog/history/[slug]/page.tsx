import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GitCommit } from 'lucide-react';
import VersionTimeLine from './versionTimeLine';
import NotFound from '../../[slug]/notfound';
import { existVersionHistory } from '@/app/api/services/getPost';

interface BlogPostProps {
	params: Promise<{ slug: string }>;
}
export default async function History({ params }: BlogPostProps) {
	const oldCode = `test222`;
	const newCode = `test`;
	const postHash = (await params).slug;

	if (!(await existVersionHistory(postHash))) {
		return <NotFound />;
	}

	return (
		<div className="mx-auto max-w-[1600px] px-4 py-8">
			<h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
				<GitCommit className="h-5 w-5" />
				버전 타임라인
			</h2>

			<div className="grid grid-cols-[300px_1fr] gap-8">
				{/* 타임라인 사이드바 */}
				<aside className="space-y-4">
					<div className="relative">
						{/* 타임라인 라인 */}
						<div className="bg-border absolute top-0 bottom-0 left-2 w-0.5"></div>

						<div className="space-y-4">
							<VersionTimeLine postHash={postHash} />
						</div>
					</div>
				</aside>

				{/* 메인 컨텐츠 영역 */}
				<main>
					<Card>
						<CardHeader>
							<CardTitle>버전 비교 및 상세 내용</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="bg-muted/50 rounded-lg p-4">
									<h3 className="mb-2 font-semibold">현재 선택된 버전: v1.3</h3>
									<p className="text-muted-foreground text-sm">
										이 버전에서는 이미지가 추가되고 내용이 보완되었습니다.
									</p>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-2">
										<h4 className="text-sm font-medium">이전 버전 (v1.2)</h4>
										<div className="rounded border border-red-200 bg-red-50 p-3 text-sm dark:border-red-800 dark:bg-red-950/20">
											<pre className="whitespace-pre-wrap">{oldCode}</pre>
										</div>
									</div>
									<div className="space-y-2">
										<h4 className="text-sm font-medium">현재 버전 (v1.3)</h4>
										<div className="rounded border border-green-200 bg-green-50 p-3 text-sm dark:border-green-800 dark:bg-green-950/20">
											<pre className="whitespace-pre-wrap">{newCode}</pre>
										</div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</main>
			</div>
		</div>
	);
}
