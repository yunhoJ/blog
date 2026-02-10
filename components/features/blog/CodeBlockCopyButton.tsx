'use client';

import { useEffect } from 'react';

export default function CodeBlockCopyButton() {
	useEffect(() => {
		// 모든 pre 요소 찾기
		const preElements = document.querySelectorAll('.prose pre');

		preElements.forEach((pre) => {
			// 이미 버튼이 추가되어 있는지 확인
			if (pre.querySelector('.code-copy-button')) {
				return;
			}

			const codeElement = pre.querySelector('code');
			if (!codeElement) return;

			// 코드 내용 가져오기
			const codeText = codeElement.textContent || '';

			// 버튼 생성
			const button = document.createElement('button');
			button.className = 'code-copy-button';
			button.setAttribute('aria-label', '코드 복사');
			button.setAttribute('type', 'button');

			// 버튼 클릭 이벤트
			button.addEventListener('click', async () => {
				try {
					await navigator.clipboard.writeText(codeText);

					// 아이콘을 체크 아이콘으로 변경
					button.classList.add('copied');

					// 1초 후 원래 아이콘으로 복원
					setTimeout(() => {
						button.classList.remove('copied');
					}, 1000);
				} catch (err) {
					// eslint-disable-next-line no-console
					console.error('코드 복사 실패:', err);
				}
			});

			// pre 요소에 버튼 직접 추가
			if (pre instanceof HTMLElement) {
				pre.style.position = 'relative';
				pre.appendChild(button);
			}
		});
	}, []);

	return null; // 이 컴포넌트는 DOM 조작만 수행하므로 렌더링할 내용 없음
}
