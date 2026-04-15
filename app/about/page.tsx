import AboutSidebar from './_components/AboutSidebar';
import PrintResumeButton from './_components/PrintResumeButton';
import CareerSection from './_components/CareerSection';
import HighlightsSection from './_components/HighlightsSection';
import ProjectsSection from './_components/ProjectsSection';
import SummarySection from './_components/SummarySection';
import { aboutProfile } from './_data/profile';

export default function AboutPage() {
	return (
		<div className="text-[#191C1E] antialiased dark:text-slate-100">
			<main className="mx-auto max-w-7xl px-6 pt-2 pb-20">
				<div className="mb-2 flex items-center justify-end">
					<PrintResumeButton />
				</div>
				<div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
					<div className="space-y-8 lg:col-span-4">
						<AboutSidebar profile={aboutProfile} />
					</div>
					<div className="space-y-16 lg:col-span-8">
						<SummarySection />
						<HighlightsSection />
						<CareerSection />
						<ProjectsSection />
					</div>
				</div>
			</main>
		</div>
	);
}
