'use client';
import { CodeIcon, FileTextIcon, GitCommit } from 'lucide-react';
import VersionTimeLine from './versionTimeLine';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { postApi } from '@/app/api/services/api';
import { handleAxiosError } from '@/lib/toasttError';
import { PostVersionData, SelectedVersionData } from '@/types/versionHistory';
import NotFound from '@/app/not-found';
import HistoryDetail from './historyDetail';
import { Button } from '@/components/ui/button';

interface BlogPostProps {
	params: Promise<{ slug: string }>;
}
export default function History({ params }: BlogPostProps) {
	const { slug: postHash } = useParams();
	const [notFound, setNotFound] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [isHtmlview, setIsHtmlview] = useState(true);
	const [versionTimeLine, setversionTimeLine] = useState<PostVersionData[]>([]);
	const [versionDetail, setversionDetail] = useState<SelectedVersionData>({
		revisionHash: '',
		previousRevisionHash: '',
	});

	const fetchversionTimeLine = useCallback(async () => {
		if (!postHash) return;
		try {
			const versionTimeLineResponse = await postApi.getVersionTimeLine(postHash as string);
			if (versionTimeLineResponse.success) {
				setversionTimeLine(versionTimeLineResponse.data);
				// 첫 번째 버전 자동 선택
				if (versionTimeLineResponse.data.length > 0) {
					setversionDetail({
						revisionHash: versionTimeLineResponse.data[0].revisionHash,
						previousRevisionHash: versionTimeLineResponse.data[0].previousRevisionHash,
					});
				}
			}
			setIsLoading(false);
		} catch (error) {
			handleAxiosError(error, '버전 히스토리 조회 중 오류가 발생했습니다.');
			// 404 페이지로 이동
			setNotFound(true);
		}
	}, [postHash]);

	useEffect(() => {
		fetchversionTimeLine();
	}, [fetchversionTimeLine]);
	if (notFound) {
		return <NotFound />;
	}

	if (isLoading) {
		return null; // 로딩 중에는 아무것도 렌더링하지 않음
	}

	return (
		<>
			<div className="mx-auto max-w-[1600px] p-4">
				{versionTimeLine.length > 0 && (
					<div className="mb-4 flex items-center justify-between">
						<h2 className="flex items-center gap-2 text-lg font-semibold">
							<GitCommit className="h-5 w-5" />
							버전 타임라인
						</h2>
						<div className="flex gap-2">
							<Button
								size="sm"
								variant="outline"
								onClick={() => setIsHtmlview(false)}
								className={`${!isHtmlview ? 'border-primary' : 'border-gray-300'}`}
							>
								<CodeIcon
									className={`${!isHtmlview ? 'text-primary border-primary' : 'text-gray-500'}`}
								/>
								<span
									className={`text-xs font-medium ${!isHtmlview ? 'text-primary' : 'text-gray-500'}`}
								>
									코드
								</span>
							</Button>

							<Button
								size="sm"
								variant="outline"
								onClick={() => setIsHtmlview(true)}
								className={`${isHtmlview ? 'border-primary' : 'border-gray-300'}`}
							>
								<FileTextIcon
									className={`${isHtmlview ? 'text-primary border-primary' : 'text-gray-500'}`}
								/>
								<span
									className={`text-xs font-medium ${isHtmlview ? 'text-primary' : 'text-gray-500'}`}
								>
									문서
								</span>
							</Button>
						</div>
					</div>
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
									postHash={postHash as string}
									onDeleteSuccess={fetchversionTimeLine}
								/>
							</div>
						</div>
					</aside>

					{/* 메인 컨텐츠 영역 */}
					<main>
						<HistoryDetail versionDetail={versionDetail} isHtmlview={isHtmlview} />
					</main>
				</div>
			</div>
		</>
	);
}
