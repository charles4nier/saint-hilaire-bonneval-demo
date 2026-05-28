'use client';

import { useMemo, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, SlidersHorizontal, type LucideIcon } from 'lucide-react';
import ContactCard, { type ContactItem, type IconVariant } from '@shared/components/ContactCard';
import './style.scss';

const B = 'annuaire';

export type AnnuaireCardData = {
	key: string;
	icon: LucideIcon;
	iconVariant: IconVariant;
	category: string;
	name: string;
	badge?: string;
	description?: string;
	contacts?: ContactItem[];
};

type CtaProps = {
	eyebrow: string;
	title: string;
	desc: string;
	email: string;
	buttonLabel?: string;
};

type Props = {
	heroGradient: string;
	breadcrumbLabel: string;
	eyebrowIcon: LucideIcon;
	eyebrowText: string;
	title: string;
	subtitle: React.ReactNode;
	sectionEyebrow: string;
	countSingular: string;
	countPlural: string;
	filters: string[];
	cards: AnnuaireCardData[];
	cta?: CtaProps;
};

export default function AnnuaireLayout({
	heroGradient,
	breadcrumbLabel,
	eyebrowIcon: EyebrowIcon,
	eyebrowText,
	title,
	subtitle,
	sectionEyebrow,
	countSingular,
	countPlural,
	filters,
	cards,
	cta,
}: Props) {
	const [active, setActive] = useState(filters[0]);
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
		() => (active === filters[0] ? cards : cards.filter((c) => c.category === active)),
		[active, cards, filters]
	);

	const counts = useMemo(() => {
		const map: Record<string, number> = { [filters[0]]: cards.length };
		for (const c of cards) map[c.category] = (map[c.category] ?? 0) + 1;
		return map;
	}, [cards, filters]);

	const count = filtered.length;
	const countLabel = count > 1 ? countPlural : countSingular;

	return (
		<>
			{/* Hero */}
			<section className={`${B}__hero`} style={{ background: heroGradient }}>
				<div className={`${B}__hero-blur ${B}__hero-blur--top`} />
				<div className={`${B}__hero-blur ${B}__hero-blur--bottom`} />
				<div className={`${B}__hero-content`}>
					<nav className={`${B}__breadcrumb`}>
						<Link href="/">Accueil</Link>
						<ChevronRight size={14} />
						<span>{breadcrumbLabel}</span>
					</nav>
					<p className={`${B}__eyebrow`}>
						<EyebrowIcon size={14} />
						{eyebrowText}
					</p>
					<h1 className={`${B}__title`}>{title}</h1>
					<div className={`${B}__divider`} />
					<p className={`${B}__subtitle`}>{subtitle}</p>
				</div>
			</section>

			{/* Section */}
			<section className={`${B}__section`}>

				{/* Header */}
				<div className={`${B}__head container`}>
					<p className={`${B}__head-eyebrow`}>{sectionEyebrow}</p>
					<h2 className={`${B}__head-title`}>{count} {countLabel}</h2>
					<div className={`${B}__head-divider`} />
				</div>

				{/* Sentinel */}
				<div ref={sentinelRef} style={{ height: 1 }} />

				{/* Filtres full-width */}
				<div className={`${B}__filters${stuck ? ` ${B}__filters--stuck` : ''}`}>
					<div className="container">
						<button
							className={`${B}__filters-toggle`}
							onClick={() => setFiltersOpen((o) => !o)}
						>
							<SlidersHorizontal size={14} />
							<span>Filtres</span>
							{active !== filters[0] && <span className={`${B}__filters-badge`}>1</span>}
							<ChevronDown
								size={14}
								className={`${B}__filters-arrow${filtersOpen ? ` ${B}__filters-arrow--open` : ''}`}
							/>
						</button>
						<div className={`${B}__filters-panel${filtersOpen ? ` ${B}__filters-panel--open` : ''}`}>
							<div className={`${B}__filters-panel-inner`}>
								<div className={`${B}__filters-pills`}>
									{filters.map((f) => (
										<button
											key={f}
											onClick={() => { setActive(f); setFiltersOpen(false); }}
											className={`${B}__filter${active === f ? ` ${B}__filter--active` : ''}`}
										>
											{f}
											<span className={`${B}__filter-count`}>{counts[f] ?? 0}</span>
										</button>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Grille */}
				<div className={`${B}__body container`}>
					<div className={`${B}__grid`}>
						{filtered.map((card) => (
							<ContactCard
								key={card.key}
								icon={card.icon}
								iconVariant={card.iconVariant}
								category={card.category}
								name={card.name}
								badge={card.badge}
								description={card.description}
								contacts={card.contacts}
							/>
						))}
					</div>

					{cta && (
						<div className={`${B}__cta-banner`}>
							<div>
								<p className={`${B}__cta-eyebrow`}>{cta.eyebrow}</p>
								<h3 className={`${B}__cta-title`}>{cta.title}</h3>
								<p className={`${B}__cta-desc`}>{cta.desc}</p>
							</div>
							<a href={`mailto:${cta.email}`} className={`${B}__cta-btn btn-primary`}>
								{cta.buttonLabel ?? 'Contacter la mairie'}
							</a>
						</div>
					)}
				</div>

			</section>
		</>
	);
}
