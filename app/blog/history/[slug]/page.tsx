'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GitCommit } from 'lucide-react';
import VersionTimeLine from './versionTimeLine';
import { notFound, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { postApi } from '@/app/api/services/api';
import { handleAxiosError } from '@/lib/toasttError';
import { PostVersionData, SelectedVersionData } from '@/types/versionHistory';
import { useRouter } from 'next/navigation';
import NotFound from '@/app/not-found';
import HistoryDetail from './historyDetail';

interface BlogPostProps {
	params: Promise<{ slug: string }>;
}
export default function History({ params }: BlogPostProps) {
	const { slug: postHash } = useParams();
	const router = useRouter();
	const [notFound, setNotFound] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [versionTimeLine, setversionTimeLine] = useState<PostVersionData[]>([]);
	const [versionDetail, setversionDetail] = useState<SelectedVersionData>({
		revisionHash: '',
		previousRevisionHash: '',
	});
	useEffect(() => {
		if (!postHash) return;
		const fetchversionTimeLine = async () => {
			try {
				const versionTimeLineResponse = await postApi.getVersionTimeLine(postHash as string);
				if (versionTimeLineResponse.success) {
					setversionTimeLine(versionTimeLineResponse.data);
					// 첫 번째 버전 자동 선택
					setversionDetail({
						revisionHash: versionTimeLineResponse.data[0].revisionHash,
						previousRevisionHash: versionTimeLineResponse.data[0].previousRevisionHash,
					});
				}
				setIsLoading(false);
			} catch (error) {
				handleAxiosError(error, '버전 히스토리 조회 중 오류가 발생했습니다.');
				// 404 페이지로 이동
				setNotFound(true);
			}
		};
		fetchversionTimeLine();
	}, [postHash]);
	if (notFound) {
		return <NotFound />;
	}

	if (isLoading) {
		return null; // 로딩 중에는 아무것도 렌더링하지 않음
	}

	return (
		<>
			<div className="mx-auto max-w-[1600px] px-4 py-8">
				{versionTimeLine.length > 0 && (
					<h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
						<GitCommit className="h-5 w-5" />
						버전 타임라인
					</h2>
				)}

				<div className="grid grid-cols-[300px_1fr] gap-8">
					{/* 타임라인 사이드바 */}
					<aside className="space-y-4">
						<div className="relative">
							{/* 타임라인 라인 */}
							<div className="bg-border absolute top-0 bottom-0 left-2 w-0.5"></div>

							<div className="space-y-4">
								<VersionTimeLine
									versionTimeLine={versionTimeLine}
									onVersionChange={(revisionHash, previousRevisionHash) => {
										setversionDetail({ revisionHash, previousRevisionHash });
									}}
									selectedVersion={versionDetail.revisionHash}
								/>
							</div>
						</div>
					</aside>

					{/* 메인 컨텐츠 영역 */}
					<main>
						<HistoryDetail versionDetail={versionDetail} />
					</main>
				</div>
			</div>
		</>
	);
}
