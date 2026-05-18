'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
	Calendar,
	ChevronRight,
	ChevronDown,
	Newspaper,
	ArrowRight,
	Tag,
	SlidersHorizontal,
} from 'lucide-react';
import './style.scss';

const CLASS_NAME = 'actualites';

type Category = 'Mairie' | 'Vie locale' | 'Travaux' | 'Événements';

type Article = {
	date: string;
	cat: Category;
	title: string;
	excerpt: string;
};

const articles: Article[] = [
	{
		date: '12 Mai 2026',
		cat: 'Mairie',
		title: 'Compte-rendu de la séance du 5 mai 2026',
		excerpt:
			"Budget primitif, voirie communale et nouveaux aménagements de l'étang. Retrouvez le compte-rendu complet de la dernière séance du conseil municipal.",
	},
	{
		date: '08 Mai 2026',
		cat: 'Vie locale',
		title: 'Marché de producteurs : nouvelle saison',
		excerpt:
			'Tous les samedis matin sur la place du village, de mai à septembre. Venez retrouver vos producteurs locaux et découvrir les nouveautés de la saison.',
	},
	{
		date: '01 Mai 2026',
		cat: 'Travaux',
		title: 'Rénovation de la salle des fêtes',
		excerpt:
			"Les travaux débutent en juin pour une livraison prévue à l'automne. La salle sera entièrement rénovée pour accueillir les événements communaux dans de meilleures conditions.",
	},
	{
		date: '24 Avril 2026',
		cat: 'Événements',
		title: 'Fête de la commune — 14 juillet 2026',
		excerpt:
			"Programme complet des festivités du 14 juillet : animations, feu d'artifice et bal populaire. Toutes les informations seront communiquées prochainement.",
	},
	{
		date: '18 Avril 2026',
		cat: 'Mairie',
		title: 'Appel à projets — subventions aux associations 2026',
		excerpt:
			"La mairie lance son appel à projets annuel pour l'attribution de subventions aux associations locales. Dossiers à déposer avant le 30 mai.",
	},
	{
		date: '10 Avril 2026',
		cat: 'Travaux',
		title: 'Réfection de la voirie — rue du Lavoir',
		excerpt:
			'Des travaux de réfection de la chaussée débutent semaine prochaine rue du Lavoir. Circulation alternée prévue du lundi au vendredi pendant deux semaines.',
	},
	{
		date: '02 Avril 2026',
		cat: 'Vie locale',
		title: 'Assemblée générale du Foyer rural',
		excerpt:
			"Le Foyer rural de Saint-Hilaire-Bonneval tient son assemblée générale annuelle. Bilan d'activités, projets 2026 et élection du bureau.",
	},
	{
		date: '25 Mars 2026',
		cat: 'Événements',
		title: 'Vide-grenier de printemps',
		excerpt:
			'Le comité des fêtes organise son vide-grenier annuel sur la place du bourg. Inscriptions ouvertes auprès du secrétariat de mairie.',
	},
];

const filters: ('Tous' | Category)[] = ['Tous', 'Mairie', 'Vie locale', 'Travaux', 'Événements'];

const catModifier: Record<Category, string> = {
	Mairie: 'primary',
	'Vie locale': 'leaf',
	Travaux: 'coral',
	Événements: 'sunshine',
};

export default function ActualitesPage() {
	const [active, setActive] = useState<'Tous' | Category>('Tous');
	const [stuck, setStuck] = useState(false);
	const [filtersOpen, setFiltersOpen] = useState(false);
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
		() => (active === 'Tous' ? articles : articles.filter((a) => a.cat === active)),
		[active]
	);

	const counts = useMemo(() => {
		const map: Partial<Record<'Tous' | Category, number>> = { Tous: articles.length };
		for (const a of articles) map[a.cat] = (map[a.cat] ?? 0) + 1;
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
						<span>Actualités</span>
					</nav>
					<p className={`${CLASS_NAME}__eyebrow`}>
						<Newspaper size={14} />
						Mairie de Saint-Hilaire-Bonneval
					</p>
					<h1 className={`${CLASS_NAME}__title`}>Actualités</h1>
					<div className={`${CLASS_NAME}__divider`} />
					<p className={`${CLASS_NAME}__subtitle`}>
						Conseil municipal, vie locale, travaux et événements :<br />
						toutes les nouvelles de la commune.
					</p>
				</div>
			</section>

			{/* Articles */}
			<section className={`${CLASS_NAME}__section`}>
				<div className={`${CLASS_NAME}__inner container`}>
					<div className={`${CLASS_NAME}__header`}>
						<p className={`${CLASS_NAME}__header-eyebrow`}>Fil d'actualité</p>
						<h2 className={`${CLASS_NAME}__header-title`}>
							{filtered.length}{' '}
							{filtered.length > 1 ? 'articles' : 'article'}
						</h2>
						<div className={`${CLASS_NAME}__header-divider`} />
					</div>

					<div ref={sentinelRef} style={{ height: 1, marginBottom: -1 }} />
					<div className={`${CLASS_NAME}__filters${stuck ? ` ${CLASS_NAME}__filters--stuck` : ''}`}>
						<button
							className={`${CLASS_NAME}__filters-toggle`}
							onClick={() => setFiltersOpen((o) => !o)}
						>
							<SlidersHorizontal size={14} />
							<span>Filtres</span>
							{active !== 'Tous' && (
								<span className={`${CLASS_NAME}__filters-badge`}>1</span>
							)}
							<ChevronDown
								size={14}
								className={`${CLASS_NAME}__filters-arrow${filtersOpen ? ` ${CLASS_NAME}__filters-arrow--open` : ''}`}
							/>
						</button>
						<div
							className={`${CLASS_NAME}__filters-panel${filtersOpen ? ` ${CLASS_NAME}__filters-panel--open` : ''}`}
						>
							<div className={`${CLASS_NAME}__filters-panel-inner`}>
								<div className={`${CLASS_NAME}__filters-pills`}>
									{filters.map((f) => {
										const isActive = f === active;
										const count = counts[f as 'Tous' | Category] ?? 0;
										return (
											<button
												key={f}
												onClick={() => setActive(f)}
												className={`${CLASS_NAME}__filter${isActive ? ` ${CLASS_NAME}__filter--active` : ''}`}
											>
												{f}
												<span className={`${CLASS_NAME}__filter-count`}>{count}</span>
											</button>
										);
									})}
								</div>
							</div>
						</div>
					</div>

					<div className={`${CLASS_NAME}__grid`}>
						{filtered.map((article) => (
							<article key={article.title} className={`${CLASS_NAME}__card`}>
								<div className={`${CLASS_NAME}__card-top`}>
									<span
										className={`${CLASS_NAME}__card-cat ${CLASS_NAME}__card-cat--${catModifier[article.cat]}`}
									>
										<Tag size={11} />
										{article.cat}
									</span>
									<span className={`${CLASS_NAME}__card-date`}>
										<Calendar size={12} />
										{article.date}
									</span>
								</div>
								<h2 className={`${CLASS_NAME}__card-title`}>{article.title}</h2>
								<p className={`${CLASS_NAME}__card-excerpt`}>{article.excerpt}</p>
								<div className={`${CLASS_NAME}__card-link`}>
									Lire la suite
									<ArrowRight size={14} />
								</div>
							</article>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
