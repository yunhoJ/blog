import { aboutProfile } from '../_data/profile';
import SectionTitle from './SectionTitle';

export default function SummarySection() {
	return (
		<section>
			<SectionTitle className="font-semibold tracking-normal">요약 소개</SectionTitle>
			<p className="text-lg leading-relaxed whitespace-pre-line text-slate-700 dark:text-slate-300">
				{aboutProfile.summary.join('\n')}
			</p>
		</section>
	);
}
