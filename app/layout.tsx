import { Inter } from 'next/font/google';
import { Fraunces } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { defaultMetadata } from '@shared/config/seo';

import '@shared/styles/index.scss';

import Header from '@shared/components/Header';
import Footer from '@shared/components/Footer';

export const inter = Inter({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-inter',
	display: 'swap',
	preload: true
});

export const fraunces = Fraunces({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-fraunces',
	display: 'swap',
	preload: true
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	viewportFit: 'cover'
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr" className={`${inter.variable} ${fraunces.variable}`}>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
