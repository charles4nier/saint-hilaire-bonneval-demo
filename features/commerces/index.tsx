'use client';

import { useMemo, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
	ChevronRight,
	Store,
	MapPin,
	Phone,
	Mail,
	Clock,
	UtensilsCrossed,
	Coffee,
	Stethoscope,
	Wrench,
	Hammer,
	ShoppingBasket,
	Sparkles,
} from 'lucide-react';
import './style.scss';

const CLASS_NAME = 'commerces';

type Category =
	| 'Alimentation'
	| 'Restauration'
	| 'Cafés - Bars'
	| 'Beauté'
	| 'Santé'
	| 'Garages - mécanique'
	| 'Artisans & entreprises'
	| 'Autres';

type Commerce = {
	name: string;
	category: Category;
	desc?: string;
	address?: string;
	hours?: string;
	phone?: string;
	email?: string;
};

const commerces: Commerce[] = [
	{
		name: 'Médecins — Dr Sylvie Dubray, Dr Evelyne Laurençon',
		category: 'Santé',
		desc: 'Médecine générale au cabinet médical de la commune.',
		phone: '05 55 31 20',
	},
	{
		name: 'Infirmières — V. Fabre, N. Lesca, A. Boireau, A. Bourges',
		category: 'Santé',
		desc: 'Soins infirmiers au cabinet et à domicile.',
		phone: '05 55 08 64 75 · 06 62 21 65 68',
	},
	{
		name: 'Kinésithérapeutes ostéopathes',
		category: 'Santé',
		desc: 'Audrey Bouchet-Laduron, Clément Legouffe Lagros, Quentin Bardaud.',
		phone: '09 87 10 79 46',
	},
	{
		name: 'Dentistes — Dr Isabelle Lalo, Dr Aurélie Boirleaud',
		category: 'Santé',
		desc: 'Soins dentaires au cabinet médical.',
		phone: '05 19 56 89 66',
	},
	{
		name: 'Orthophoniste — Mme Durand',
		category: 'Santé',
		desc: 'Maison Communale, 1 rue du Lavoir.',
		address: '1 rue du Lavoir, 87260 Saint-Hilaire-Bonneval',
	},
	{
		name: 'Psychologue — Mme Méaume',
		category: 'Santé',
		desc: 'Maison Communale, 1 rue du Lavoir.',
		address: '1 rue du Lavoir, 87260 Saint-Hilaire-Bonneval',
		phone: '06 74 05 25 65',
	},
	{
		name: "L'Adéquate — Bar restaurant traiteur",
		category: 'Restauration',
		desc: 'Aurélien Demars. Restaurant, bar et service traiteur au bourg.',
		address: 'Le Bourg, 87260 Saint-Hilaire-Bonneval',
		phone: '05 55 00 61 67',
		email: 'www.ladequate.fr',
	},
	{
		name: 'Boulangerie Saint Hilaire',
		category: 'Alimentation',
		desc: 'Boulangerie pâtisserie au cœur du bourg.',
		address: 'Le Bourg, 87260 Saint-Hilaire-Bonneval',
		phone: '05 55 30 55 48',
	},
	{
		name: 'Mme Carmen Coteur — Coiffeuse',
		category: 'Beauté',
		address: 'Le Vert Vallon, 87260 Saint-Hilaire-Bonneval',
		phone: '06 18 88 17 72',
	},
	{
		name: 'Mme Evelyne Cheminade — Coiffeuse',
		category: 'Beauté',
		address: 'Leysserie, 87260 Saint-Hilaire-Bonneval',
		phone: '05 55 09 60 79 · 06 76 69 56 18',
	},
	{
		name: 'Garage SARL Lachenaud',
		category: 'Garages - mécanique',
		desc: 'Mécanique automobile, entretien et réparation.',
		address: 'La Gare, 87260 Saint-Hilaire-Bonneval',
		phone: '05 55 00 92 92',
	},
	{
		name: 'Philippe Tardieux — Réparation engins TP & agricoles',
		category: 'Garages - mécanique',
		address: 'Le Masgardaud, 87260 Saint-Hilaire-Bonneval',
		phone: '06 78 29 16 39',
	},
	{
		name: 'Renov Math — Plomberie & revêtement',
		category: 'Artisans & entreprises',
		desc: 'Matthieu Tullet — plomberie et revêtements.',
		address: '17 chemin du Petit Bellevue, 87260 Saint-Hilaire-Bonneval',
		phone: '06 83 63 41 35',
		email: 'contact@renovmath.fr',
	},
	{
		name: 'EURL Manus Christophe — Couverture, charpente, zinguerie',
		category: 'Artisans & entreprises',
		desc: 'Couverture, charpente, zinguerie, isolation.',
		address: 'La Plaine, 87260 Saint-Hilaire-Bonneval',
		phone: '06 09 37 15 39',
	},
	{
		name: 'Luc Riffaud — Couverture, charpente, zinguerie',
		category: 'Artisans & entreprises',
		address: "L'Age, 87260 Saint-Hilaire-Bonneval",
		phone: '06 40 64 75 30',
	},
	{
		name: 'Boris Nadaud — Travaux publics',
		category: 'Artisans & entreprises',
		address: 'Route de la Gare, 87260 Saint-Hilaire-Bonneval',
		phone: '05 55 00 86 37',
	},
	{
		name: 'SARL Nadaud — Maçonnerie',
		category: 'Artisans & entreprises',
		address: 'La Gare, 87260 Saint-Hilaire-Bonneval',
		phone: '05 55 00 60 42',
	},
	{
		name: 'Edibat Construction — Maçonnerie',
		category: 'Artisans & entreprises',
		address: 'La Croix, 87260 Saint-Hilaire-Bonneval',
		phone: '05 55 30 44 08',
	},
	{
		name: 'LCD Menuiserie',
		category: 'Artisans & entreprises',
		desc: 'Menuiserie, agencement.',
		address: 'Le Bourg, 87260 Saint-Hilaire-Bonneval',
		phone: '05 55 09 55 01',
	},
	{
		name: 'SAS Financière — Écurie (M. Montel)',
		category: 'Autres',
		desc: 'Écurie, activités équestres.',
		address: 'Le Treuil, 87260 Saint-Hilaire-Bonneval',
		phone: '06 80 73 33 01',
	},
	{
		name: 'Les Chevaux de Moncontour',
		category: 'Autres',
		desc: 'Compétitions de chevaux.',
		phone: '06 77 04 00 58',
		email: 'leschevauxdemoncontour.com',
	},
	{
		name: 'Les Sabots de Laine',
		category: 'Autres',
		desc: "Ferme pédagogique, production biologique, vente directe, gîte d'enfants, accueil à la ferme, séjours et animations. Cécile et Jean-Louis Brunet.",
		address: 'Le Pouyol, 87260 Saint-Hilaire-Bonneval',
		phone: '05 55 09 61 13 · 06 83 07 79 66',
	},
	{
		name: 'Éditions Passtime',
		category: 'Autres',
		desc: "Maison d'édition. Mme Céline Courtaud.",
		address: 'Résidence les Tandaridiers, 87260 Saint-Hilaire-Bonneval',
		phone: '06 87 56 31 24',
	},
	{
		name: 'Pôle de Lanaud — JM Alcover, M. Gambarotto',
		category: 'Autres',
		address: 'Lanaud, 87260 Saint-Hilaire-Bonneval',
		phone: '05 55 06 46 00',
	},
	{
		name: 'Henriette Faye — Traductrice',
		category: 'Autres',
		address: 'Le Puybaraud, 87260 Saint-Hilaire-Bonneval',
		phone: '05 55 00 96 25',
	},
];

type IconComponent = typeof Store;

const categoryMeta: Record<Category, { icon: IconComponent; modifier: string }> = {
	Alimentation: { icon: ShoppingBasket, modifier: 'leaf' },
	Restauration: { icon: UtensilsCrossed, modifier: 'coral' },
	'Cafés - Bars': { icon: Coffee, modifier: 'terracotta' },
	Beauté: { icon: Sparkles, modifier: 'coral' },
	Santé: { icon: Stethoscope, modifier: 'primary' },
	'Garages - mécanique': { icon: Wrench, modifier: 'muted' },
	'Artisans & entreprises': { icon: Hammer, modifier: 'leaf' },
	Autres: { icon: Store, modifier: 'primary' },
};

const filters: ('Tous' | Category)[] = [
	'Tous',
	'Alimentation',
	'Restauration',
	'Cafés - Bars',
	'Beauté',
	'Santé',
	'Garages - mécanique',
	'Artisans & entreprises',
	'Autres',
];

export default function CommercesPage() {
	const [active, setActive] = useState<(typeof filters)[number]>('Tous');
	const [stuck, setStuck] = useState(false);
	const sentinelRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const sentinel = sentinelRef.current;
		if (!sentinel) return;
		const observer = new IntersectionObserver(
			([entry]) => setStuck(!entry.isIntersecting),
			{ rootMargin: '-80px 0px 0px 0px', threshold: 0 }
		);
		observer.observe(sentinel);
		return () => observer.disconnect();
	}, []);

	const filtered = useMemo(
		() => (active === 'Tous' ? commerces : commerces.filter((c) => c.category === active)),
		[active]
	);

	const counts = useMemo(() => {
		const map: Partial<Record<Category | 'Tous', number>> = { Tous: commerces.length };
		for (const c of commerces) map[c.category] = (map[c.category] ?? 0) + 1;
		return map;
	}, []);

	return (
		<>
			{/* Hero */}
			<section className={`${CLASS_NAME}__hero`}>
				<div className={`${CLASS_NAME}__hero-blur ${CLASS_NAME}__hero-blur--top`} />
				<div className={`${CLASS_NAME}__hero-blur ${CLASS_NAME}__hero-blur--bottom`} />
				<div className={`${CLASS_NAME}__hero-content`}>
					<nav className={`${CLASS_NAME}__breadcrumb`}>
						<Link href="/">Accueil</Link>
						<ChevronRight size={14} />
						<span>Commerces &amp; artisans</span>
					</nav>
					<p className={`${CLASS_NAME}__eyebrow`}>
						<Store size={14} />
						Vivre à Saint-Hilaire-Bonneval
					</p>
					<h1 className={`${CLASS_NAME}__title`}>Commerces &amp; artisans</h1>
					<div className={`${CLASS_NAME}__divider`} />
					<p className={`${CLASS_NAME}__subtitle`}>
						Producteurs, restaurateurs, professionnels de santé et artisans :<br />
						celles et ceux qui animent la commune au quotidien.
					</p>
				</div>
			</section>

			{/* Annuaire */}
			<section className={`${CLASS_NAME}__section`}>
				<div className={`${CLASS_NAME}__inner container`}>
					<div className={`${CLASS_NAME}__header`}>
						<p className={`${CLASS_NAME}__header-eyebrow`}>Annuaire local</p>
						<h2 className={`${CLASS_NAME}__header-title`}>
							{filtered.length}{' '}
							{filtered.length > 1 ? 'professionnels' : 'professionnel'} à découvrir
						</h2>
						<div className={`${CLASS_NAME}__header-divider`} />
					</div>

					{/* Filtres */}
					<div ref={sentinelRef} style={{ height: 1, marginBottom: -1 }} />
					<div className={`${CLASS_NAME}__filters${stuck ? ` ${CLASS_NAME}__filters--stuck` : ''}`}>
						{filters.map((f) => {
							const isActive = f === active;
							const count = counts[f as Category | 'Tous'] ?? 0;
							return (
								<button
									key={f}
									onClick={() => setActive(f)}
									className={`${CLASS_NAME}__filter ${isActive ? `${CLASS_NAME}__filter--active` : ''}`}
								>
									{f}
									<span className={`${CLASS_NAME}__filter-count`}>{count}</span>
								</button>
							);
						})}
					</div>

					{/* Grille */}
					<div className={`${CLASS_NAME}__grid`}>
						{filtered.map((c) => {
							const meta = categoryMeta[c.category];
							const Icon = meta.icon;
							return (
								<article key={c.name} className={`${CLASS_NAME}__card`}>
									<div className={`${CLASS_NAME}__card-icon ${CLASS_NAME}__card-icon--${meta.modifier}`}>
										<Icon size={20} strokeWidth={1.75} />
									</div>
									<p className={`${CLASS_NAME}__card-category`}>{c.category}</p>
									<h3 className={`${CLASS_NAME}__card-name`}>{c.name}</h3>
									{c.desc && <p className={`${CLASS_NAME}__card-desc`}>{c.desc}</p>}
									<div className={`${CLASS_NAME}__card-contacts`}>
										{c.address && (
											<div className={`${CLASS_NAME}__card-contact`}>
												<MapPin size={14} className={`${CLASS_NAME}__contact-icon`} />
												<span>{c.address}</span>
											</div>
										)}
										{c.hours && (
											<div className={`${CLASS_NAME}__card-contact`}>
												<Clock size={14} className={`${CLASS_NAME}__contact-icon`} />
												<span>{c.hours}</span>
											</div>
										)}
										{c.phone && (
											<div className={`${CLASS_NAME}__card-contact`}>
												<Phone size={14} className={`${CLASS_NAME}__contact-icon`} />
												<a href={`tel:${c.phone.replace(/\s/g, '')}`} className={`${CLASS_NAME}__contact-link`}>
													{c.phone}
												</a>
											</div>
										)}
										{c.email && (
											<div className={`${CLASS_NAME}__card-contact`}>
												<Mail size={14} className={`${CLASS_NAME}__contact-icon`} />
												<a href={`mailto:${c.email}`} className={`${CLASS_NAME}__contact-link`}>
													{c.email}
												</a>
											</div>
										)}
									</div>
								</article>
							);
						})}
					</div>

					{/* Encart référencement */}
					<div className={`${CLASS_NAME}__cta-banner`}>
						<div>
							<p className={`${CLASS_NAME}__cta-eyebrow`}>Vous êtes un professionnel ?</p>
							<h3 className={`${CLASS_NAME}__cta-title`}>
								Référencez votre commerce ou activité dans l'annuaire communal
							</h3>
							<p className={`${CLASS_NAME}__cta-desc`}>
								La mairie tient à jour cet annuaire pour valoriser le tissu économique local.
								Contactez le secrétariat pour ajouter ou mettre à jour votre fiche.
							</p>
						</div>
						<a
							href="mailto:mairie@saint-hilaire-bonneval.fr"
							className={`${CLASS_NAME}__cta-btn btn-primary`}
						>
							Contacter la mairie
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
