import type { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import ComingSoon from '@shared/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
	title: 'Publications',
	description: 'Retrouvez les publications officielles de la commune de Saint-Hilaire-Bonneval.',
	path: '/mairie/publications'
});

export default function Page() {
	return <ComingSoon title="Publications" section="Votre mairie" sectionHref="/mairie/publications" />;
}
