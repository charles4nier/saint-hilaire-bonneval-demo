import type { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import ComingSoon from '@shared/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
	title: 'Sports & loisirs',
	description: 'Activités sportives et de loisirs à Saint-Hilaire-Bonneval.',
	path: '/vivre/sports-loisirs'
});

export default function Page() {
	return <ComingSoon title="Sports & loisirs" section="Vivre à Saint-Hilaire" sectionHref="/vivre/sports-loisirs" />;
}
