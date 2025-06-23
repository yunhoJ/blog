export function fixBrTags(content: string) {
	return content.replace(/<br>/g, '<br />');
}
