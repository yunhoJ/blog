'use client';
import { postApi } from '@/app/api/services/api';
import { SelectedVersionData } from '@/types/versionHistory';
import { useEffect, useState } from 'react';
import { VersionComparison } from '@/types/versionHistory';
import MdxClient from './viewerMdx';
import { CodeIcon, FileTextIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
export default function HistoryDetail({
	versionDetail,
	isHtmlview,
}: {
	versionDetail: SelectedVersionData;
	isHtmlview: boolean;
}) {
	const [versionDetailData, setVersionDetailData] = useState<VersionComparison>({});

	useEffect(() => {
		const fetchVersionDetailData = async () => {
			const response = await postApi.getVersionDetailData(
				versionDetail.revisionHash,
				versionDetail.previousRevisionHash
			);
			if (response.success) {
				setVersionDetailData(response.data);
			}
		};
		fetchVersionDetailData();
	}, [versionDetail]);
	return (
		<div className="space-y-4">
			<style
				dangerouslySetInnerHTML={{
					__html: `
					.diff-added {
						background-color: #dcfce7 !important;
						color: #166534 !important;
						padding: 4px !important;
						border-radius: 4px !important;
						display: block !important;
						position: relative !important;
						padding-left: 24px !important;
					}
					.diff-removed {
						background-color: #fee2e2 !important;
						color: #991b1b !important;
						padding: 4px !important;
						border-radius: 4px !important;
						display: block !important;
						position: relative !important;
						padding-left: 24px !important;
					}
					.diff-added::before {
						content: '+' !important;
						color: #166534 !important;
						position: absolute !important;
						left: 8px !important;
						top: 4px !important;
						font-weight: bold !important;
					}
					.diff-removed::before {
						content: '−' !important;
						color: #991b1b !important;
						position: absolute !important;
						left: 8px !important;
						top: 4px !important;
						font-weight: bold !important;
					}
				`,
				}}
			/>
			<div className="grid grid-cols-2 gap-4">
				<div className="space-y-2">
					<h4 className="font-medium">제목 : {versionDetailData.previousVersion?.postTitle}</h4>
					<div className="mdx-viewer">
						{isHtmlview ? (
							<MdxClient source={versionDetailData.previousVersion?.postContent || ''} />
						) : (
							<div
								className="text-sm break-words whitespace-pre-wrap"
								dangerouslySetInnerHTML={{
									__html: versionDetailData.previousVersionChangeContent || '',
								}}
							/>
						)}
					</div>
				</div>
				<div className="space-y-2">
					<h4 className="font-medium">제목 : {versionDetailData.currentVersion?.postTitle}</h4>
					<div className="mdx-viewer">
						{isHtmlview ? (
							<MdxClient source={versionDetailData.currentVersion?.postContent || ''} />
						) : (
							<div
								className="text-sm break-words whitespace-pre-wrap"
								dangerouslySetInnerHTML={{
									__html: versionDetailData.currentVersionChangeContent || '',
								}}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
