'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { formatDate, formatDateWithoutTime } from '@/lib/date';

interface PostDateProps {
	date: string | Date;
	includeTime?: boolean;
}

export default function PostDate({ date, includeTime = true }: PostDateProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const formattedDate = mounted
		? format(new Date(date), includeTime ? 'yyyy-MM-dd HH:mm' : 'yyyy-MM-dd', { locale: ko })
		: includeTime
			? formatDate(date)
			: formatDateWithoutTime(date);

	return <span suppressHydrationWarning>{formattedDate}</span>;
}
