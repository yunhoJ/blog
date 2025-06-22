'use client';

import { useEffect, useState } from 'react';
import { postApi } from '@/app/api/services/api';

interface ViewCountIncrementerProps {
	postHash: string;
	userId: string;
	readTime: number;
}

interface ViewRecord {
	postHash: string;
	timestamp: number;
}

export default function ViewCountIncrementer({
	postHash,
	userId,
	readTime = 60,
}: ViewCountIncrementerProps) {
	const [hasIncremented, setHasIncremented] = useState(false);
	console.log('ViewCountIncrementer - 마운트됨');

	useEffect(() => {
		const incrementViewCount = async () => {
			const COOLDOWN_TIME = 12; // 12시간 쿨다운
			const COOLDOWN_UINT = 1000 * 60 * 60; // 1시간 단위
			const now = Date.now();
			const cooldownTimeAgo = now - COOLDOWN_TIME * COOLDOWN_UINT;

			// localStorage에서 조회 기록 확인
			const viewRecords: ViewRecord[] = JSON.parse(localStorage.getItem('viewedPosts') || '[]');

			// 현재 포스트의 최근 조회 기록 찾기
			const recentView = viewRecords.find((record) => record.postHash === postHash);

			// 쿨다운 시간 내에 이미 조회했는지 확인
			if (recentView && recentView.timestamp > cooldownTimeAgo) {
				const remainingHours = Math.ceil(
					(COOLDOWN_TIME * COOLDOWN_UINT - (now - recentView.timestamp)) / COOLDOWN_UINT
				);
				console.log(`쿨다운 중입니다. ${remainingHours}시간 후 다시 조회수가 증가합니다.`);
				return;
			}

			try {
				// 조회수 증가 API 호출
				await postApi.incrementViewCount(postHash, userId);

				// 기존 기록 제거 후 새 기록 추가 및 시간 차이 이전 값들은 삭제
				const updatedRecords = viewRecords.filter(
					(record) => !(record.postHash === postHash) && record.timestamp > cooldownTimeAgo
				);

				updatedRecords.push({
					postHash,
					timestamp: now,
				});

				localStorage.setItem('viewedPosts', JSON.stringify(updatedRecords));

				setHasIncremented(true);
				console.log('조회수 증가 완료:', postHash);
			} catch (error) {
				console.error('조회수 증가 실패:', error);
			}
		};

		// 컴포넌트 마운트 시 1분 후 실행
		if (!hasIncremented) {
			const timer = setTimeout(
				() => {
					incrementViewCount();
				},
				readTime === 0 ? 30 * 1000 : readTime * 1000 // 읽는 시간이 0이면 30초 후 실행
			);

			// 클린업 함수로 타이머 정리
			return () => {
				clearTimeout(timer);
				console.log('타이머 정리됨');
			};
		}
	}, [postHash, userId]); // hasIncremented 제거로 중복 실행 방지

	return null;
}
