'use client';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

interface SelectBoxProps {
	options: { value: string; label: string }[];
	value: string;
	onChange: (value: string) => void;
	placeholder: string;
}

export default function SelectBox({ options, value, onChange, placeholder }: SelectBoxProps) {
	return (
		<Select value={value} onValueChange={onChange}>
			<SelectTrigger className="w-[100px]">
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{options.map((option) => (
					<SelectItem key={option.value} value={option.value}>
						{option.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
