'use client';

import { Users, GraduationCap, Trophy, Leaf, Flag, type LucideIcon } from 'lucide-react';
import AnnuaireLayout, { type AnnuaireCardData } from '@shared/components/AnnuaireLayout';
import type { IconVariant } from '@shared/components/ContactCard';
import { associations, type Category } from './data';

const categoryMeta: Record<Category, { icon: LucideIcon; iconVariant: IconVariant }> = {
	'Éducation & famille': { icon: GraduationCap, iconVariant: 'primary' },
	'Sports':              { icon: Trophy,        iconVariant: 'coral' },
	'Culture & patrimoine':{ icon: Leaf,          iconVariant: 'leaf' },
	'Citoyenneté':         { icon: Flag,          iconVariant: 'muted' },
};

const cards: AnnuaireCardData[] = associations.map((a) => ({
	key: a.name,
	icon: categoryMeta[a.category].icon,
	iconVariant: categoryMeta[a.category].iconVariant,
	category: a.category,
	name: a.name,
	badge: a.shortName,
	description: a.desc,
	contacts: a.email ? [{ type: 'email' as const, value: a.email }] : [],
}));

const filters = ['Tous', 'Éducation & famille', 'Sports', 'Culture & patrimoine', 'Citoyenneté'];

export default function VieAssociativePage() {
	return (
		<AnnuaireLayout
			heroGradient="linear-gradient(135deg, oklch(0.52 0.17 240), oklch(0.70 0.16 220))"
			breadcrumbLabel="Vie associative"
			eyebrowIcon={Users}
			eyebrowText="Vivre à Saint-Hilaire-Bonneval"
			title="Vie associative"
			subtitle={<>Sport, culture, éducation et citoyenneté :<br />{associations.length} associations animent la commune.</>}
			sectionEyebrow="Annuaire associatif"
			countSingular="association"
			countPlural="associations"
			filters={filters}
			cards={cards}
			cta={{
				eyebrow: "Vous représentez une association ?",
				title: "Faites référencer votre association sur le site de la mairie",
				desc: "La mairie tient à jour cet annuaire pour valoriser la vie associative locale. Contactez le secrétariat pour ajouter ou mettre à jour votre fiche.",
				email: "mairie@saint-hilaire-bonneval.fr",
			}}
		/>
	);
}
