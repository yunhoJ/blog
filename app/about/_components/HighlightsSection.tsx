import { aboutProfile } from '../_data/profile';
import SectionTitle from './SectionTitle';

export default function HighlightsSection() {
	return (
		<section className="resume-section-highlights">
			<SectionTitle className="font-semibold tracking-normal">핵심 성과</SectionTitle>

			<div className="grid gap-4 sm:grid-cols-2">
				{aboutProfile.highlights.map((h) => (
					<div
						key={`${h.title}-${h.metric ?? ''}`}
						className="rounded-xl border border-slate-200 bg-white/70 p-4 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/40"
					>
						<div className="flex flex-wrap items-baseline justify-between gap-2">
							<p className="font-semibold tracking-tight text-slate-900 dark:text-slate-50">
								{h.title}
							</p>
							{h.metric ? (
								<span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
									{h.metric}
								</span>
							) : null}
						</div>
						{h.detail ? (
							<p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
								{h.detail}
							</p>
						) : null}
					</div>
				))}
			</div>
		</section>
	);
}
