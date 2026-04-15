import React from 'react';

export default function SectionTitle({
	children,
	accentClassName = 'h-[2px] w-6 bg-black dark:bg-primary',
	className = '',
}: {
	children: React.ReactNode;
	accentClassName?: string;
	className?: string;
}) {
	return (
		<h2
			className={[
				'dark:text-primary mb-6 flex items-center gap-2 text-2xl font-bold tracking-tight text-black',
				className,
			]
				.filter(Boolean)
				.join(' ')}
		>
			<span className={accentClassName} />
			{children}
		</h2>
	);
}

