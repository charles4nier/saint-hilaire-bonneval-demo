import type { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import ComingSoon from '@shared/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
	title: 'Cadre de vie',
	description: 'Environnement, nature et cadre de vie à Saint-Hilaire-Bonneval.',
	path: '/vivre/cadre-de-vie'
});

export default function Page() {
	return <ComingSoon title="Cadre de vie" section="Vivre à Saint-Hilaire" sectionHref="/vivre/cadre-de-vie" />;
}
