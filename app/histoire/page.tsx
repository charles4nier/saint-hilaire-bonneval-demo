import type { Metadata } from 'next';
import { generatePageMetadata } from '@shared/config/seo';
import HistoirePage from '@features/histoire';

export const metadata: Metadata = generatePageMetadata({
	title: 'Histoire de Meuzac',
	description:
		"Découvrez l'histoire de Meuzac, seule commune de France à porter ce nom : origines gallo-romaines, paroisse, développement du bourg et patrimoine.",
	path: '/histoire'
});

export default function Page() {
	return <HistoirePage />;
}
