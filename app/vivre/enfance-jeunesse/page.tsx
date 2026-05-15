import type { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import ComingSoon from '@shared/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
	title: 'Enfance & jeunesse',
	description: "Services et activités dédiés à l'enfance et à la jeunesse à Saint-Hilaire-Bonneval.",
	path: '/vivre/enfance-jeunesse'
});

export default function Page() {
	return <ComingSoon title="Enfance & jeunesse" section="Vivre à Saint-Hilaire" sectionHref="/vivre/enfance-jeunesse" />;
}
