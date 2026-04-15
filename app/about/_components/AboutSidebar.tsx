import { AboutProfile } from '../_data/profile';
import Image from 'next/image';
import { formatCareerDurationKorean } from '../_utils/formatCareerDurationKorean';
import { getSkillBadge } from '../_utils/skillBadge';
import { Mail, MapPin, Github } from 'lucide-react';

function StackBadge({ item }: { item: string }) {
	const badge = getSkillBadge(item);

	if (badge) {
		return (
			<span className="inline-flex">
				<Image
					alt={badge.alt}
					src={badge.src}
					width={140}
					height={28}
					className="h-6 w-auto dark:brightness-60 dark:contrast-120"
					unoptimized
				/>
			</span>
		);
	}

	return (
		<span className="rounded-full bg-[#E6E8EA] px-3 py-1 text-xs font-bold tracking-tighter text-[#45464D] uppercase">
			{item}
		</span>
	);
}

export default function AboutSidebar({ profile }: { profile: AboutProfile }) {
	const careerDuration = formatCareerDurationKorean(profile.startDate, new Date());

	return (
		<aside className="space-y-8">
			<div className="space-y-4 sm:grid sm:grid-cols-2 sm:items-center sm:gap-6 lg:block">
				<div className="aspect-square w-full max-w-[300px] overflow-hidden rounded-xl">
					<Image
						className="h-full w-full object-cover object-top"
						alt="portrait"
						src="/images/resume.JPG"
						width={800}
						height={800}
						priority
					/>
				</div>

				<div className="space-y-4 lg:mt-10">
					<h1 className="dark:text-primary text-4xl font-extrabold tracking-tight text-black">
						{profile.name}
					</h1>
					<div className="space-y-1">
						<p className="font-medium tracking-widest text-[#45464D] uppercase dark:text-[#8b8c94]">
							{profile.roleTitle}
						</p>
						<p className="text-sm font-medium text-[#45464D] dark:text-[#8b8c94]">
							{profile.roleSubtitle}
							{careerDuration ? ` (경력 ${careerDuration})` : ''}
						</p>
					</div>

					<div className="space-y-3 pt-4 text-[#45464D]">
						<div className="flex items-center gap-3">
							<Mail className="text-primary h-4 w-4" aria-hidden />
							<span className="text-sm font-medium dark:text-[#8b8c94]">{profile.email}</span>
						</div>
						<div className="flex items-center gap-3">
							<Github className="text-primary h-4 w-4" aria-hidden />
							<a
								className="text-sm font-medium hover:text-emerald-700 dark:text-[#8b8c94]"
								href={profile.githubUrl}
							>
								{profile.githubLabel}
							</a>
						</div>
						<div className="flex items-center gap-3">
							<MapPin className="text-primary h-4 w-4" aria-hidden />
							<span className="text-sm font-medium dark:text-[#8b8c94]">{profile.location}</span>
						</div>
					</div>
				</div>
			</div>

			<h2 className="dark:text-primary mb-5 text-2xl font-bold text-black">기술 스택</h2>
			{profile.skills.map((group) => (
				<section key={group.group}>
					<h3 className="mb-3 text-xs font-bold tracking-widest text-black uppercase dark:text-[#8b8c94]">
						{group.group}
					</h3>
					<div className="flex flex-wrap gap-2">
						{group.items.map((item) => (
							<StackBadge key={item} item={item} />
						))}
					</div>
				</section>
			))}
		</aside>
	);
}
