import type { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import ComingSoon from '@shared/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
	title: 'Conseil municipal',
	description: 'Retrouvez les informations sur le conseil municipal de Saint-Hilaire-Bonneval.',
	path: '/mairie/conseil-municipal'
});

export default function Page() {
	return <ComingSoon title="Conseil municipal" section="Votre mairie" sectionHref="/mairie/conseil-municipal" />;
}
