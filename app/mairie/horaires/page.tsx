import type { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import ComingSoon from '@shared/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
	title: 'Horaires & informations',
	description: "Horaires d'ouverture et informations pratiques de la mairie de Saint-Hilaire-Bonneval.",
	path: '/mairie/horaires'
});

export default function Page() {
	return <ComingSoon title="Horaires & informations" section="Votre mairie" sectionHref="/mairie/horaires" />;
}
