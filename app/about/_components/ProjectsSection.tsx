import { aboutProfile } from '../_data/profile';
import SectionTitle from './SectionTitle';

function TechBadge({ children }: { children: React.ReactNode }) {
	return (
		<span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
			{children}
		</span>
	);
}

export default function ProjectsSection() {
	return (
		<section>
			<SectionTitle>주요 프로젝트</SectionTitle>
			<div className="space-y-6">
				{aboutProfile.projects.map((p) => (
					<article
						key={p.id}
						className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/40 print:shadow-none"
					>
						<div className="flex flex-col gap-1">
							<div className="flex min-w-0 items-start justify-between gap-3">
								<p className="min-w-0 font-semibold text-slate-900 dark:text-slate-50">{p.name}</p>
								{p.role ? (
									<span className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
										{p.role}
									</span>
								) : null}
							</div>
							{p.subtitle || p.period ? (
								<div className="flex min-w-0 items-baseline justify-between gap-3">
									{p.subtitle ? (
										<p className="min-w-0 text-sm text-slate-600 dark:text-slate-300">
											{p.subtitle}
										</p>
									) : (
										<span className="min-w-0 flex-1" aria-hidden />
									)}
									{p.period ? (
										<p className="shrink-0 text-xs font-medium text-slate-500 dark:text-slate-400">
											{p.period}
										</p>
									) : null}
								</div>
							) : null}
						</div>

						{p.customerSummary ? (
							<p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
								{p.customerSummary}
							</p>
						) : null}

						<ul className="mt-4 space-y-1 leading-6 text-slate-700 dark:text-slate-300">
							{p.highlights.map((h) => (
								<li key={h} className="flex gap-2">
									<span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500" />
									<span>{h}</span>
								</li>
							))}
						</ul>

						{p.metrics?.length ? (
							<div className="mt-4 flex flex-wrap gap-2">
								{p.metrics.map((m) => (
									<span
										key={m}
										className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
									>
										{m}
									</span>
								))}
							</div>
						) : null}

						<div className="mt-4 flex flex-wrap gap-2">
							{p.tech?.map((t) => (
								<TechBadge key={t}>{t}</TechBadge>
							))}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
