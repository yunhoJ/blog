import type { ComponentPropsWithoutRef } from 'react';

// 글 본문 표를 가로 스크롤 상자로 감싼다 (모바일에서 넓은 표가 화면 밖으로 넘치지 않게).
// rehype-sanitize가 class를 지우므로 rehype 단계가 아니라 렌더 단계(MDXRemote components)에서 감싼다.
export default function MdxTable(props: ComponentPropsWithoutRef<'table'>) {
	return (
		<div className="table-scroll" role="region" aria-label="표" tabIndex={0}>
			<table {...props} />
		</div>
	);
}
