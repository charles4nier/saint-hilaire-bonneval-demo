import type { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import ComingSoon from '@shared/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
	title: 'Services municipaux',
	description: 'Découvrez les services municipaux de Saint-Hilaire-Bonneval.',
	path: '/mairie/services-municipaux'
});

export default function Page() {
	return <ComingSoon title="Services municipaux" section="Votre mairie" sectionHref="/mairie/services-municipaux" />;
}
