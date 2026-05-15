import type { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import ComingSoon from '@shared/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
	title: 'Comptes-rendus',
	description: 'Consultez les comptes-rendus du conseil municipal de Saint-Hilaire-Bonneval.',
	path: '/mairie/comptes-rendus'
});

export default function Page() {
	return <ComingSoon title="Comptes-rendus" section="Votre mairie" sectionHref="/mairie/comptes-rendus" />;
}
