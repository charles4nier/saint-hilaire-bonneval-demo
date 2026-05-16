'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import './style.scss';

const CLASS_NAME = 'header';

type SubLink = { label: string; href: string };
type NavLink = { label: string; href: string; children?: SubLink[] };

const navLinks: NavLink[] = [
	{
		label: 'Votre mairie',
		href: '#',
		children: [
			{ label: 'Le maire & les élus', href: '/mairie/maire-elus' },
			{ label: 'Conseil municipal', href: '/mairie/conseil-municipal' },
			{ label: 'Comptes-rendus', href: '/mairie/comptes-rendus' },
			{ label: 'Services municipaux', href: '/mairie/services-municipaux' },
			{ label: 'Urbanisme', href: '/mairie/urbanisme' },
			{ label: 'Publications', href: '/mairie/publications' },
			{ label: 'Horaires & informations', href: '/mairie/horaires' },
			{ label: 'Budget & projets', href: '/mairie/budget-projets' },
		],
	},
	{
		label: 'Vivre à Saint-Hilaire',
		href: '#',
		children: [
			{ label: 'Services & vie pratique', href: '/commerces' },
			{ label: 'Enfance & jeunesse', href: '/vivre/enfance-jeunesse' },
			{ label: 'Vie associative', href: '/vivre/vie-associative' },
			{ label: 'Cadre de vie', href: '/vivre/cadre-de-vie' },
			{ label: 'Sports & loisirs', href: '/vivre/sports-loisirs' },
		],
	},
	{
		label: 'Tourisme & découvertes',
		href: '#',
		children: [
			{ label: 'Histoire', href: '/histoire' },
			{ label: 'Carte interactive', href: '/tourisme/carte-interactive' },
		],
	},
	{ label: 'Mes démarches', href: '/#demarches' },
];

function DropdownItem({ link }: { link: NavLink }) {
	if (!link.children) {
		return (
			<Link href={link.href} className={`${CLASS_NAME}__nav-link`}>
				{link.label}
			</Link>
		);
	}

	return (
		<div className={`${CLASS_NAME}__dropdown`}>
			<button className={`${CLASS_NAME}__nav-link ${CLASS_NAME}__nav-link--has-children`}>
				{link.label}
				<ChevronDown size={13} className={`${CLASS_NAME}__chevron`} />
			</button>
			<div className={`${CLASS_NAME}__submenu`}>
				{link.children.map((child) => (
					<Link key={child.href} href={child.href} className={`${CLASS_NAME}__submenu-link`}>
						{child.label}
					</Link>
				))}
			</div>
		</div>
	);
}

function MobileNavItem({ link, onClose }: { link: NavLink; onClose: () => void }) {
	const [open, setOpen] = useState(false);

	if (!link.children) {
		return (
			<Link href={link.href} className={`${CLASS_NAME}__mobile-link`} onClick={onClose}>
				{link.label}
			</Link>
		);
	}

	return (
		<div className={`${CLASS_NAME}__mobile-group`}>
			<button
				className={`${CLASS_NAME}__mobile-link ${CLASS_NAME}__mobile-link--parent`}
				onClick={() => setOpen((o) => !o)}
			>
				{link.label}
				<ChevronDown
					size={15}
					className={`${CLASS_NAME}__chevron ${open ? `${CLASS_NAME}__chevron--open` : ''}`}
				/>
			</button>
			{open && (
				<div className={`${CLASS_NAME}__mobile-sub`}>
					{link.children.map((child) => (
						<Link
							key={child.href}
							href={child.href}
							className={`${CLASS_NAME}__mobile-sublink`}
							onClick={onClose}
						>
							{child.label}
						</Link>
					))}
				</div>
			)}
		</div>
	);
}

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	return (
		<header className={`${CLASS_NAME} scrolled`}>
			<div className={`${CLASS_NAME}__inner container`}>
				<Link href="/" className={`${CLASS_NAME}__logo`}>
					<div className={`${CLASS_NAME}__logo-badge`}>
						<Image
							src="/saint-hilaire-bonneval-logo.png"
							alt="Blason de Saint-Hilaire-Bonneval"
							width={36}
							height={36}
						/>
					</div>
					<div className={`${CLASS_NAME}__logo-text`}>
						<span className={`${CLASS_NAME}__logo-name`}>Saint-Hilaire-Bonneval</span>
						<span className={`${CLASS_NAME}__logo-sub`}>Haute-Vienne · 87260</span>
					</div>
				</Link>

				<nav className={`${CLASS_NAME}__nav`}>
					{navLinks.map((link) => (
						<DropdownItem key={link.label} link={link} />
					))}
				</nav>

				<div className={`${CLASS_NAME}__actions`}>
					<Link href="/#location-salle" className={`${CLASS_NAME}__cta`}>
						Location de salles
					</Link>
					<button
						className={`${CLASS_NAME}__burger`}
						onClick={() => setIsOpen(!isOpen)}
						aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{isOpen && (
				<>
					<div className={`${CLASS_NAME}__overlay`} onClick={() => setIsOpen(false)} />
					<nav className={`${CLASS_NAME}__mobile`}>
						{navLinks.map((link) => (
							<MobileNavItem key={link.label} link={link} onClose={() => setIsOpen(false)} />
						))}
					</nav>
				</>
			)}
		</header>
	);
}
