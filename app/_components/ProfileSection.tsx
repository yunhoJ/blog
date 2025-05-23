import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { LucideIcon } from 'lucide-react';

interface ProfileSectionProps {
	socialLinks: {
		icon: LucideIcon;
		url: string;
	}[];
}
export default function ProfileSection(props: ProfileSectionProps) {
	return (
		<>
			<Card className="gap-4">
				<CardHeader>
					<CardTitle className="flex flex-col items-center">
						<Image
							src="/images/profile.jpeg"
							alt="profile"
							width={200}
							height={200}
							className="mb-6 rounded-4xl"
						/>
						<div className="text-lg font-bold">전윤호</div>
						<div className="text-primary text-sm">backend developer</div>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-2">
						<div className="flex flex-row items-center justify-between">
							{props.socialLinks.map((link, index) => (
								<a
									key={index}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-primary/10 rounded-sm p-2 hover:bg-green-100"
								>
									<link.icon className="h-4 w-4" />
								</a>
							))}
						</div>
						<div className="bg-primary/10 rounded-sm p-2 text-center hover:bg-green-100">
							교육 크리에이터
						</div>
					</div>
				</CardContent>
			</Card>
		</>
	);
}
