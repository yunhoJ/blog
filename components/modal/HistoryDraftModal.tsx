import { postApi } from '@/app/api/services/api';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { handleAxiosError } from '@/lib/toasttError';
import { AlertTriangle, ArrowRightLeft, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
interface PostInfo {
	revisionHash: string;
	postHash: string;
}
interface PostDraftModalProps {
	draftModalOpen: boolean;
	setDraftModalOpen: (open: boolean) => void;
	postInfo: PostInfo;
}
export default function HistoryDraftModal({
	draftModalOpen,
	setDraftModalOpen,
	postInfo,
}: PostDraftModalProps) {
	const router = useRouter();
	const handleOverwrite = async () => {
		try {
			// 임시글 삭제
			await postApi.deletePostDraft(postInfo.postHash);
			await postApi.EditPublishPost({
				postHash: postInfo.postHash,
				revisionHash: postInfo.revisionHash,
			});
			localStorage.setItem('postHash', postInfo.postHash);
			router.push('/blog/write');
		} catch (error) {
			console.log('error', error);
			handleAxiosError(error, '수정 중 오류가 발생했습니다.');
		}
	};
	const handleKeepAndSwitch = async () => {
		try {
			await postApi.changeDraftState({ postHash: postInfo.postHash, draftState: false });
			await postApi.EditPublishPost({
				postHash: postInfo.postHash,
				revisionHash: postInfo.revisionHash,
			});
			localStorage.setItem('postHash', postInfo.postHash);
			router.push('/blog/write');
		} catch (error) {
			console.log('error', error);
			handleAxiosError(error, '수정 중 오류가 발생했습니다.');
		}
	};
	return (
		<AlertDialog open={draftModalOpen} onOpenChange={setDraftModalOpen}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="flex items-center gap-2">
						<AlertTriangle className="h-4 w-4 text-amber-500" />
						이미 수정중인 포스트가 있습니다.
					</AlertDialogTitle>
					<AlertDialogDescription>
						현재 임시 저장 중인 글이 있어요. 어떻게 진행할까요?
					</AlertDialogDescription>
					<div className="bg-muted/40 rounded-md border p-3 text-sm leading-6">
						<ul className="text-muted-foreground list-disc pl-5">
							<li>
								<b>덮어쓰기</b> : 현재 임시글을 삭제하고, 선택한 이력으로 새로 수정합니다.
							</li>
							<li>
								<b>모두 유지</b> : 현재 임시글은 저장하고, 선택한 이력으로 새로 수정합니다.
							</li>
						</ul>
					</div>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>취소</AlertDialogCancel>
					<AlertDialogAction
						className="bg-destructive hover:bg-destructive/80"
						onClick={handleOverwrite}
					>
						<div className="flex items-center gap-2">
							<span>덮어쓰기</span>
						</div>
					</AlertDialogAction>
					<AlertDialogAction
						className="bg-primary text-primary-foreground hover:bg-primary/90"
						onClick={handleKeepAndSwitch}
					>
						<div className="flex items-center gap-2">
							<span>모두 유지</span>
						</div>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
