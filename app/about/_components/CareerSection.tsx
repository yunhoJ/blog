import { aboutProfile } from '../_data/profile';
import SectionTitle from './SectionTitle';

export default function CareerSection() {
	return (
		<section>
			<SectionTitle>경력</SectionTitle>
			<div className="space-y-12">
				{aboutProfile.career.map((c) => (
					<div
						key={`${c.company}-${c.title}`}
						className="relative pl-8 before:absolute before:top-2 before:bottom-0 before:left-0 before:w-px before:bg-[#C6C6CD] before:content-[''] dark:before:bg-slate-700"
					>
						<div className="absolute top-2 left-[-4px] h-2 w-2 rounded-full bg-[#006C49]" />
						<div className="mb-2 flex flex-row items-start justify-between">
							<h3 className="text-xl font-bold text-black dark:text-slate-50">{c.company}</h3>
							<span className="w-fit rounded-full bg-[#ECEEF0] px-3 py-1 text-sm font-bold tracking-tight text-slate-700 uppercase dark:bg-slate-800 dark:text-slate-200">
								{c.period}
							</span>
						</div>
						<p className="mb-4 text-sm font-medium text-emerald-800 dark:text-emerald-300">
							{c.title}
						</p>
						<ul className="mt-4 space-y-1 leading-6 text-slate-700 dark:text-slate-300">
							{c.career_summary.map((s, i) => (
								<li key={`${c.company}-summary-${i}`} className="flex gap-2">
									<span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500" />
									<span>{s}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
