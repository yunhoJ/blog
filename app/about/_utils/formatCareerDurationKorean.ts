export function formatCareerDurationKorean(startDate: string, now: Date) {
	// startDate: "YYYY-MM" 형태
	const m = startDate.trim().match(/^(\d{4})-(\d{2})$/);
	if (!m) return '';

	const startYear = Number(m[1]);
	const startMonth = Number(m[2]); // 1-12
	if (!Number.isFinite(startYear) || !Number.isFinite(startMonth) || startMonth < 1 || startMonth > 12)
		return '';

	const endYear = now.getFullYear();
	const endMonth = now.getMonth() + 1; // 1-12

	// "2021-12 ~ 2026-03"을 4년 4개월처럼 세기 위해 월 단위 inclusive로 계산
	const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
	if (totalMonths <= 0) return '';

	const years = Math.floor(totalMonths / 12);
	const months = totalMonths % 12;

	if (years > 0 && months > 0) return `${years}년 ${months}개월`;
	if (years > 0) return `${years}년`;
	return `${months}개월`;
}

