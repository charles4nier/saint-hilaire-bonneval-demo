'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import './style.scss';

const CLASS_NAME = 'header';

const navLinks = [
	{ label: 'La mairie', href: '#' },
	{ label: 'Vivre à Saint-Hilaire-Bonneval', href: '#' },
	{ label: 'Démarches', href: '#demarches' },
	{ label: 'Tourisme & Patrimoine', href: '#decouvrir' },
	{ label: 'Vie associative', href: '#' },
	{ label: 'Contact', href: '#contact' }
];

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
		<header className={`${CLASS_NAME} ${isScrolled ? 'scrolled' : ''}`}>
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
						<a key={link.label} href={link.href} className={`${CLASS_NAME}__nav-link`}>
							{link.label}
						</a>
					))}
				</nav>

				<div className={`${CLASS_NAME}__actions`}>
					<a href="#demarches" className={`${CLASS_NAME}__cta`}>
						Mes démarches
					</a>
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
					<div
						className={`${CLASS_NAME}__overlay`}
						onClick={() => setIsOpen(false)}
					/>
					<nav className={`${CLASS_NAME}__mobile`}>
						{navLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className={`${CLASS_NAME}__mobile-link`}
								onClick={() => setIsOpen(false)}
							>
								{link.label}
							</a>
						))}
					</nav>
				</>
			)}
		</header>
	);
}
