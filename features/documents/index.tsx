'use client';

import { useMemo, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, FileText, Download, BookOpen, SlidersHorizontal } from 'lucide-react';
import './style.scss';

const CLASS_NAME = 'documents';

type DocumentType =
	| 'Comptes-rendus'
	| 'Bulletins municipaux'
	| 'Budget'
	| 'Arrêtés'
	| 'Urbanisme';

type Doc = {
	title: string;
	type: DocumentType;
	date: string;
	href: string;
};

const docs: Doc[] = [
	// Comptes-rendus
	{ title: 'Compte-rendu du conseil municipal', type: 'Comptes-rendus', date: '2024-11-14', href: '#' },
	{ title: 'Compte-rendu du conseil municipal', type: 'Comptes-rendus', date: '2024-09-19', href: '#' },
	{ title: 'Compte-rendu du conseil municipal', type: 'Comptes-rendus', date: '2024-06-06', href: '#' },
	{ title: 'Compte-rendu du conseil municipal', type: 'Comptes-rendus', date: '2024-03-28', href: '#' },
	{ title: 'Compte-rendu du conseil municipal', type: 'Comptes-rendus', date: '2024-01-18', href: '#' },
	{ title: 'Compte-rendu du conseil municipal', type: 'Comptes-rendus', date: '2023-11-09', href: '#' },
	{ title: 'Compte-rendu du conseil municipal', type: 'Comptes-rendus', date: '2023-09-14', href: '#' },
	{ title: 'Compte-rendu du conseil municipal', type: 'Comptes-rendus', date: '2023-06-22', href: '#' },
	{ title: 'Compte-rendu du conseil municipal', type: 'Comptes-rendus', date: '2023-03-16', href: '#' },
	{ title: 'Compte-rendu du conseil municipal', type: 'Comptes-rendus', date: '2023-01-12', href: '#' },
	{ title: 'Compte-rendu du conseil municipal', type: 'Comptes-rendus', date: '2022-11-17', href: '#' },
	{ title: 'Compte-rendu du conseil municipal', type: 'Comptes-rendus', date: '2022-09-08', href: '#' },
	{ title: 'Compte-rendu du conseil municipal', type: 'Comptes-rendus', date: '2022-06-23', href: '#' },

	// Bulletins
	{ title: 'Bulletin municipal — Été 2024', type: 'Bulletins municipaux', date: '2024-07-01', href: '#' },
	{ title: 'Bulletin municipal — Hiver 2023', type: 'Bulletins municipaux', date: '2023-12-01', href: '#' },
	{ title: 'Bulletin municipal — Été 2023', type: 'Bulletins municipaux', date: '2023-07-01', href: '#' },
	{ title: 'Bulletin municipal — Hiver 2022', type: 'Bulletins municipaux', date: '2022-12-01', href: '#' },
	{ title: 'Bulletin municipal — Été 2022', type: 'Bulletins municipaux', date: '2022-07-01', href: '#' },

	// Budget
	{ title: 'Budget primitif 2024', type: 'Budget', date: '2024-03-28', href: '#' },
	{ title: 'Compte administratif 2023', type: 'Budget', date: '2024-03-28', href: '#' },
	{ title: 'Budget primitif 2023', type: 'Budget', date: '2023-03-16', href: '#' },
	{ title: 'Compte administratif 2022', type: 'Budget', date: '2023-03-16', href: '#' },

	// Arrêtés
	{ title: 'Arrêté — Restriction d\'eau en période de sécheresse', type: 'Arrêtés', date: '2024-08-05', href: '#' },
	{ title: 'Arrêté — Fermeture temporaire de la voie communale n°4', type: 'Arrêtés', date: '2024-05-20', href: '#' },
	{ title: 'Arrêté — Organisation du marché annuel', type: 'Arrêtés', date: '2023-09-01', href: '#' },

	// Urbanisme
	{ title: 'Plan Local d\'Urbanisme (PLU) — Document complet', type: 'Urbanisme', date: '2022-01-15', href: '#' },
	{ title: 'Règlement du PLU', type: 'Urbanisme', date: '2022-01-15', href: '#' },
	{ title: 'Enquête publique — Modification du PLU', type: 'Urbanisme', date: '2023-10-02', href: '#' },
];

const types: ('Tous' | DocumentType)[] = [
	'Tous',
	'Comptes-rendus',
	'Bulletins municipaux',
	'Budget',
	'Arrêtés',
	'Urbanisme',
];

const typeMeta: Record<DocumentType, string> = {
	'Comptes-rendus': 'primary',
	'Bulletins municipaux': 'coral',
	'Budget': 'leaf',
	'Arrêtés': 'terracotta',
	'Urbanisme': 'muted',
};

function formatDate(iso: string) {
	return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function DocumentsPage() {
	const [activeType, setActiveType] = useState<(typeof types)[number]>('Tous');
	const [activeYear, setActiveYear] = useState<number | 'Tous'>('Tous');
	const [filtersOpen, setFiltersOpen] = useState(false);
	const [stuck, setStuck] = useState(false);
	const sentinelRef = useRef<HTMLDivElement>(null);

	const years = useMemo(() => {
		const set = new Set(docs.map((d) => new Date(d.date).getFullYear()));
		return Array.from(set).sort((a, b) => b - a);
	}, []);

	const filtered = useMemo(() => {
		return docs.filter((d) => {
			const matchType = activeType === 'Tous' || d.type === activeType;
			const matchYear = activeYear === 'Tous' || new Date(d.date).getFullYear() === activeYear;
			return matchType && matchYear;
		});
	}, [activeType, activeYear]);

	const counts = useMemo(() => {
		const map: Partial<Record<DocumentType | 'Tous', number>> = { Tous: docs.length };
		for (const d of docs) map[d.type] = (map[d.type] ?? 0) + 1;
		return map;
	}, []);

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
						<Link href="/mairie">Votre mairie</Link>
						<ChevronRight size={14} />
						<span>Documents &amp; publications</span>
					</nav>
					<p className={`${CLASS_NAME}__eyebrow`}>
						<BookOpen size={14} />
						Votre mairie
					</p>
					<h1 className={`${CLASS_NAME}__title`}>Documents &amp; publications</h1>
					<div className={`${CLASS_NAME}__divider`} />
					<p className={`${CLASS_NAME}__subtitle`}>
						Comptes-rendus, bulletins, budget, arrêtés et documents d'urbanisme :<br />
						tous les documents officiels de la commune en un seul endroit.
					</p>
				</div>
			</section>

			{/* Documents */}
			<section className={`${CLASS_NAME}__section`}>
				<div className={`${CLASS_NAME}__inner container`}>

					<div className={`${CLASS_NAME}__header`}>
						<p className={`${CLASS_NAME}__header-eyebrow`}>Archives officielles</p>
						<h2 className={`${CLASS_NAME}__header-title`}>
							{filtered.length} {filtered.length > 1 ? 'documents' : 'document'}
						</h2>
						<div className={`${CLASS_NAME}__header-divider`} />
					</div>

					{/* Filtres */}
					<div ref={sentinelRef} style={{ height: 1, marginBottom: -1 }} />
					<div className={`${CLASS_NAME}__filters${stuck ? ` ${CLASS_NAME}__filters--stuck` : ''}`}>
						<button
							className={`${CLASS_NAME}__filters-toggle`}
							onClick={() => setFiltersOpen((o) => !o)}
						>
							<SlidersHorizontal size={14} />
							<span>Filtres</span>
							{(activeType !== 'Tous' || activeYear !== 'Tous') && (
								<span className={`${CLASS_NAME}__filters-badge`}>
									{[activeType !== 'Tous', activeYear !== 'Tous'].filter(Boolean).length}
								</span>
							)}
							<ChevronDown size={14} className={`${CLASS_NAME}__filters-arrow${filtersOpen ? ` ${CLASS_NAME}__filters-arrow--open` : ''}`} />
						</button>
						<div className={`${CLASS_NAME}__filters-panel${filtersOpen ? ` ${CLASS_NAME}__filters-panel--open` : ''}`}>
							<div className={`${CLASS_NAME}__filters-panel-inner`}>
								<div className={`${CLASS_NAME}__filters-row`}>
									{types.map((t) => (
										<button
											key={t}
											onClick={() => setActiveType(t)}
											className={`${CLASS_NAME}__filter ${activeType === t ? `${CLASS_NAME}__filter--active` : ''}`}
										>
											{t}
											<span className={`${CLASS_NAME}__filter-count`}>
												{t === 'Tous' ? docs.length : (counts[t as DocumentType] ?? 0)}
											</span>
										</button>
									))}
								</div>
								<div className={`${CLASS_NAME}__filters-row`}>
									<button
										onClick={() => setActiveYear('Tous')}
										className={`${CLASS_NAME}__filter ${CLASS_NAME}__filter--year ${activeYear === 'Tous' ? `${CLASS_NAME}__filter--active` : ''}`}
									>
										Toutes les années
									</button>
									{years.map((y) => (
										<button
											key={y}
											onClick={() => setActiveYear(y)}
											className={`${CLASS_NAME}__filter ${CLASS_NAME}__filter--year ${activeYear === y ? `${CLASS_NAME}__filter--active` : ''}`}
										>
											{y}
										</button>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Grille */}
					{filtered.length > 0 ? (
						<div className={`${CLASS_NAME}__grid`}>
							{filtered
								.sort((a, b) => b.date.localeCompare(a.date))
								.map((doc, i) => (
									<a
										key={i}
										href={doc.href}
										download={doc.href !== '#'}
										target={doc.href !== '#' ? '_blank' : undefined}
										rel="noopener noreferrer"
										className={`${CLASS_NAME}__card`}
									>
										<div className={`${CLASS_NAME}__card-icon ${CLASS_NAME}__card-icon--${typeMeta[doc.type]}`}>
											<FileText size={18} strokeWidth={1.75} />
										</div>
										<div className={`${CLASS_NAME}__card-body`}>
											<span className={`${CLASS_NAME}__card-type`}>{doc.type}</span>
											<p className={`${CLASS_NAME}__card-title`}>{doc.title}</p>
											<span className={`${CLASS_NAME}__card-date`}>{formatDate(doc.date)}</span>
										</div>
										<div className={`${CLASS_NAME}__card-download`}>
											<Download size={14} />
										</div>
									</a>
								))}
						</div>
					) : (
						<p className={`${CLASS_NAME}__empty`}>Aucun document pour cette sélection.</p>
					)}
				</div>
			</section>
		</>
	);
}
