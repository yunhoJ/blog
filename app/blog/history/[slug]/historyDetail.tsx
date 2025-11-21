'use client';
import { postApi } from '@/app/api/services/api';
import { SelectedVersion, SelectedVersionData } from '@/types/versionHistory';
import { useEffect, useState } from 'react';
import { VersionComparison } from '@/types/versionHistory';
import MdxClient from './viewerMdx';
import SelectBox from '@/components/modal/selectbox';
import { ArrowBigRight, ChevronDown, ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function HistoryDetail({
	versionDetail,
	isHtmlview,
	selectedVersion,
	isTimelineExpanded,
	setIsTimelineExpanded,
}: {
	versionDetail: SelectedVersionData;
	isHtmlview: boolean;
	selectedVersion: SelectedVersion[];
	isTimelineExpanded: boolean;
	setIsTimelineExpanded: (isTimelineExpanded: boolean) => void;
}) {
	const [versionDetailData, setVersionDetailData] = useState<VersionComparison>({});
	const [selectPreviousVersion, setSelectPreviousVersion] = useState<string>(
		versionDetail.previousRevisionHash
	);
	const [selectCurrentVersion, setSelectCurrentVersion] = useState<string>(
		versionDetail.revisionHash
	);

	useEffect(() => {
		setSelectCurrentVersion(versionDetail.revisionHash);
		setSelectPreviousVersion(versionDetail.previousRevisionHash);
		if (window.innerWidth < 768) {
			setIsTimelineExpanded(false);
		}
	}, [versionDetail]);

	useEffect(() => {
		const fetchVersionDetailData = async () => {
			const response = await postApi.getVersionDetailData(
				selectCurrentVersion,
				selectPreviousVersion
			);
			if (response.success) {
				setVersionDetailData(response.data);
				console.log(response.data);
			}
		};
		fetchVersionDetailData();
	}, [selectPreviousVersion, selectCurrentVersion]);
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

			<div className="hidden w-full grid-cols-2 gap-4 md:grid md:grid-cols-[1fr_30px_1fr] md:gap-2">
				<div className="min-w-0 space-y-2">
					<div className="flex items-center justify-between">
						<h4 className="font-semibold">제목 : {versionDetailData.previousVersion?.postTitle}</h4>
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
					<Separator className="my-4" />
					<div className="mdx-viewer">
						{isHtmlview ? (
							<MdxClient source={versionDetailData.previousVersionChangeContent || ''} />
						) : (
							<div
								className="text-sm break-words whitespace-pre-wrap"
								dangerouslySetInnerHTML={{
									__html:
										`${versionDetailData.previousVersionChangeContent
											?.replace(/<div class="diff-(removed|added)">\n/g, '<div class="diff-$1">') // <div> 태그 뒤 \n 제거
											.replace(/\n<\/div>\n/g, '</div>')}` || '',
								}}
							/>
						)}
					</div>
				</div>

				<div className="hidden md:block">
					<ChevronRight className="text-muted-foreground h-full w-full" />
				</div>
				<div className="min-w-0 space-y-2">
					<div className="flex items-center justify-between">
						<h4 className="font-semibold">제목 : {versionDetailData.currentVersion?.postTitle}</h4>
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
					<Separator className="my-4" />
					<div className="mdx-viewer">
						{isHtmlview ? (
							<MdxClient source={versionDetailData.currentVersionChangeContent || ''} />
						) : (
							<div
								className="text-sm break-words whitespace-pre-wrap"
								dangerouslySetInnerHTML={{
									__html:
										`${versionDetailData.currentVersionChangeContent
											?.replace(/<div class="diff-(removed|added)">\n/g, '<div class="diff-$1">') // <div> 태그 뒤 \n 제거
											.replace(/\n<\/div>\n/g, '</div>')}` || '',
								}}
							/>
						)}
					</div>
				</div>
			</div>
			{!isTimelineExpanded && (
				<div className="grid grid-cols-1 md:hidden">
					<div className="flex min-w-0 items-center justify-between">
						<h4 className="font-semibold">제목 : {versionDetailData.previousVersion?.postTitle}</h4>
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
					<div className="flex items-center justify-center md:hidden">
						<ChevronDown className="text-muted-foreground h-6 w-6" />
					</div>
					<div className="flex min-w-0 items-center justify-between">
						<h4 className="font-semibold">제목 : {versionDetailData.currentVersion?.postTitle}</h4>
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

					<Separator className="my-4" />

					<div className="mdx-viewer">
						{isHtmlview ? (
							<MdxClient source={versionDetailData.totalVersionChangeContent || ''} />
						) : (
							<div
								className="text-sm break-words whitespace-pre-wrap"
								dangerouslySetInnerHTML={{
									__html:
										`${versionDetailData.totalVersionChangeContent
											?.replace(/<div class="diff-(removed|added)">\n/g, '<div class="diff-$1">') // <div> 태그 뒤 \n 제거
											.replace(/\n<\/div>\n/g, '</div>')}` || '',
								}}
							/>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
