import type { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import ComingSoon from '@shared/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
	title: 'Vie associative',
	description: 'Associations et vie associative de Saint-Hilaire-Bonneval.',
	path: '/vivre/vie-associative'
});

export default function Page() {
	return <ComingSoon title="Vie associative" section="Vivre à Saint-Hilaire" sectionHref="/vivre/vie-associative" />;
}
