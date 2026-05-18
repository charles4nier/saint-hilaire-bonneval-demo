import { Caveat, Cormorant } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { defaultMetadata } from '@shared/config/seo';

import '@shared/styles/index.scss';

import Header from '@shared/components/Header';
import Footer from '@shared/components/Footer';
import FloatingButtons from '@shared/components/FloatingButtons';

const cormorant = Cormorant({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	style: ['normal', 'italic'],
	variable: '--font-script',
	display: 'swap',
	preload: false
});

const caveat = Caveat({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-caveat',
	display: 'swap',
	preload: false
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	viewportFit: 'cover',
	colorScheme: 'light'
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr" className={`${cormorant.variable} ${caveat.variable}`}>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
				<FloatingButtons />
			</body>
		</html>
	);
}
