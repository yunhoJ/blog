import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

const toKST = (date: string | Date): Date => {
	const d = new Date(date);
	const utc = d.getTime() + d.getTimezoneOffset() * 60000;
	return new Date(utc + 9 * 3600000);
};

export const formatDate = (date: string | Date) => {
	return format(toKST(date), 'yyyy-MM-dd HH:mm', { locale: ko });
};

export const formatDateWithoutTime = (date: string | Date) => {
	return format(toKST(date), 'yyyy-MM-dd', { locale: ko });
};
