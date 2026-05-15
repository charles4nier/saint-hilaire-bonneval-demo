import type { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import ComingSoon from '@shared/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
	title: 'Budget & projets',
	description: 'Budget communal et projets en cours à Saint-Hilaire-Bonneval.',
	path: '/mairie/budget-projets'
});

export default function Page() {
	return <ComingSoon title="Budget & projets" section="Votre mairie" sectionHref="/mairie/budget-projets" />;
}
