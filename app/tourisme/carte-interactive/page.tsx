import type { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import ComingSoon from '@shared/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
	title: 'Carte interactive',
	description: 'Explorez Saint-Hilaire-Bonneval grâce à notre carte interactive.',
	path: '/tourisme/carte-interactive'
});

export default function Page() {
	return <ComingSoon title="Carte interactive" section="Tourisme & découvertes" sectionHref="/tourisme/carte-interactive" />;
}
