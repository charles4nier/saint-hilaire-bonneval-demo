import type { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import ComingSoon from '@shared/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
	title: 'Le maire & les élus',
	description: 'Découvrez le maire et les élus de Saint-Hilaire-Bonneval.',
	path: '/mairie/maire-elus'
});

export default function Page() {
	return <ComingSoon title="Le maire & les élus" section="Votre mairie" sectionHref="/mairie/maire-elus" />;
}
