import type { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import ComingSoon from '@shared/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
	title: 'Urbanisme',
	description: "Informations sur l'urbanisme et les permis de construire à Saint-Hilaire-Bonneval.",
	path: '/mairie/urbanisme'
});

export default function Page() {
	return <ComingSoon title="Urbanisme" section="Votre mairie" sectionHref="/mairie/urbanisme" />;
}
