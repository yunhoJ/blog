'use client';
import { postApi } from '@/app/api/services/api';
import { SelectedVersion, SelectedVersionData } from '@/types/versionHistory';
import { useEffect, useState } from 'react';
import { VersionComparison } from '@/types/versionHistory';
import MdxClient from './viewerMdx';
import SelectBox from '@/components/modal/selectbox';
import { ArrowBigRight, ChevronRight } from 'lucide-react';

export default function HistoryDetail({
	versionDetail,
	isHtmlview,
	selectedVersion,
}: {
	versionDetail: SelectedVersionData;
	isHtmlview: boolean;
	selectedVersion: SelectedVersion[];
}) {
	const [versionDetailData, setVersionDetailData] = useState<VersionComparison>({});
	const [selectPreviousVersion, setSelectPreviousVersion] = useState<string>(
		versionDetail.previousRevisionHash
	);
	const [selectCurrentVersion, setSelectCurrentVersion] = useState<string>(
		versionDetail.revisionHash
	);
	console.log(selectPreviousVersion, selectCurrentVersion);
	useEffect(() => {
		setSelectCurrentVersion(versionDetail.revisionHash);
		setSelectPreviousVersion(versionDetail.previousRevisionHash);
	}, [versionDetail]);
	useEffect(() => {
		const fetchVersionDetailData = async () => {
			const response = await postApi.getVersionDetailData(
				selectCurrentVersion,
				selectPreviousVersion
			);
			if (response.success) {
				setVersionDetailData(response.data);
			}
		};
		fetchVersionDetailData();
	}, [versionDetail, selectPreviousVersion, selectCurrentVersion]);
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
			<div className="grid grid-cols-2 gap-4 md:grid-cols-[1fr_30px_1fr] md:gap-2">
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<h4 className="font-medium">제목 : {versionDetailData.previousVersion?.postTitle} </h4>
						<SelectBox
							options={
								selectedVersion.length > 0
									? selectedVersion.map((version) => ({
											value: version.revisionHash,
											label: version.historyVersion,
										}))
									: []
							}
							value={selectPreviousVersion}
							placeholder="버전 선택"
							onChange={(value) => {
								setSelectPreviousVersion(value);
							}}
						/>
					</div>
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

				<div className="hidden md:block">
					<ChevronRight className="text-muted-foreground h-full w-full" />
				</div>
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<h4 className="font-medium">제목 : {versionDetailData.currentVersion?.postTitle}</h4>
						<SelectBox
							options={
								selectedVersion.length > 0
									? selectedVersion.map((version) => ({
											value: version.revisionHash,
											label: version.historyVersion,
										}))
									: []
							}
							value={selectCurrentVersion}
							placeholder="버전 선택"
							onChange={(value) => {
								setSelectCurrentVersion(value);
							}}
						/>
					</div>
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
