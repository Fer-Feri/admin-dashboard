export function formatDate(isoString: string) {
	const date = new Date(isoString);
	return date.toLocaleDateString('fa-IR', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	});
}
