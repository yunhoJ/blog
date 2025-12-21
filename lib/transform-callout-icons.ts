// [!type] 텍스트를 아이콘으로만 대체
const calloutIcons: Record<string, string> = {
	note: '📝',
	important: '⚠️',
	warning: '⛔',
	tip: '💡',
	caution: '🔥',
};

export function transformCalloutIcons(content: string): string {
	// [!TYPE] 패턴을 찾아서 아이콘으로만 교체
	return content.replace(/\[!(note|important|warning|tip|caution)\]/gi, (match, type) => {
		const icon = calloutIcons[type.toLowerCase()] || '📝';
		return icon;
	});
}
