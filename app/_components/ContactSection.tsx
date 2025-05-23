import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ContactSectionProps {
	contactItems: {
		icon: LucideIcon;
		title: string;
		description: string;
		mailto: {
			email: string;
			subject: string;
			body: string;
		};
	}[];
}

// const contactItems = [
//     {
//         icon: Megaphone,
//         title: '광고 및 제휴',
//         description: '브랜드 홍보, 컨텐츠 제작, 협업 제안',
//         mailto: {
//             email: 'bruce.lean17@gmail.com',
//             subject: '[광고/제휴] 제안',
//             body: '브랜드/제품명:\n제안 내용:\n기간:\n예산:',
//         },
//     },

export default function ContactSection(props: ContactSectionProps) {
	return (
		<Card className="gap-3">
			<CardHeader>
				<CardTitle>문의하기</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-2">
					{props.contactItems.map((item, index) => (
						<a
							key={index}
							href={`mailto:${item.mailto.email}?subject=${encodeURIComponent(
								item.mailto.subject
							)}&body=${encodeURIComponent(item.mailto.body)}`}
							className="group bg-primary/5 hover:bg-muted flex items-start gap-4 rounded-lg p-3 transition-colors"
						>
							<div className="bg-primary/20 text-primary shrink-0 items-center justify-center rounded-md p-1.5">
								<item.icon className="h-4 w-4" />
							</div>
							<div className="flex-1">
								<h3 className="font-medium">{item.title}</h3>
								<p className="text-muted-foreground text-xs">{item.description}</p>
							</div>
						</a>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
