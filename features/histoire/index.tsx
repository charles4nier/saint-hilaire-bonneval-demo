import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ScrollText } from 'lucide-react';
import './style.scss';

const CLASS_NAME = 'histoire';

const stats = [
	{ value: 'XI', suffix: 'ᵉ s.', label: 'Premières mentions historiques' },
	{ value: '1875', label: 'Aménagement du patrimoine naturel' },
	{ value: '1934', label: 'Développement économique local' },
	{ value: '50 km', label: 'De sentiers balisés' },
];

export default function HistoirePage() {
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
						<span>Histoire</span>
					</nav>
					<p className={`${CLASS_NAME}__eyebrow`}>
						<ScrollText size={14} />
						Patrimoine &amp; Mémoire
					</p>
					<h1 className={`${CLASS_NAME}__title`}>Histoire de Saint-Hilaire-Bonneval</h1>
					<div className={`${CLASS_NAME}__divider`} />
					<p className={`${CLASS_NAME}__subtitle`}>
						<span className={`${CLASS_NAME}__subtitle-upper`}>Un village aux racines profondes</span>
						<br />
						<span className={`${CLASS_NAME}__subtitle-script`}>au cœur du Limousin</span>
					</p>
				</div>
			</section>

			{/* Bloc 1 : origines */}
			<section className={`${CLASS_NAME}__section`}>
				<div className={`${CLASS_NAME}__section-inner container`}>
					<div className={`${CLASS_NAME}__block-card`}>
						<p className={`${CLASS_NAME}__block-eyebrow`}>Aux origines</p>
						<h2 className={`${CLASS_NAME}__block-title`}>
							Des premières traces à la formation de la commune
						</h2>
						<div className={`${CLASS_NAME}__block-body`}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
							<p>
								Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
								fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
								culpa qui officia deserunt mollit anim id est laborum.
							</p>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
								doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.
							</p>
						</div>
					</div>

					<div className={`${CLASS_NAME}__image-grid`}>
						<div className={`${CLASS_NAME}__image-main`}>
							<Image
								src="/saint-hilaire-bonneval-village.jpg"
								alt="Le bourg de Saint-Hilaire-Bonneval"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className={`${CLASS_NAME}__img`}
							/>
						</div>
						<div className={`${CLASS_NAME}__image-sub`}>
							<Image
								src="/saint-hilaire-bonneval-forest.jpg"
								alt="Forêt et patrimoine naturel"
								fill
								sizes="(max-width: 768px) 50vw, 25vw"
								className={`${CLASS_NAME}__img`}
							/>
						</div>
						<div className={`${CLASS_NAME}__image-sub`}>
							<Image
								src="/saint-hilaire-bonneval-lake.jpg"
								alt="Plan d'eau de Forgeneuve"
								fill
								sizes="(max-width: 768px) 50vw, 25vw"
								className={`${CLASS_NAME}__img`}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Bloc 2 : évolution */}
			<section className={`${CLASS_NAME}__section ${CLASS_NAME}__section--muted`}>
				<div className={`${CLASS_NAME}__evolution container`}>
					<p className={`${CLASS_NAME}__evolution-eyebrow`}>Évolution</p>
					<h2 className={`${CLASS_NAME}__evolution-title`}>
						Un bourg qui grandit au fil des siècles
					</h2>
					<div className={`${CLASS_NAME}__evolution-divider`} />
					<div className={`${CLASS_NAME}__evolution-body`}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem
							quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
						</p>
						<p>
							Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
							adipisci velit. Ut labore et dolore magnam aliquam quaerat voluptatem.
						</p>
						<p>
							Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
							molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
						</p>
						<p>
							At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
							voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.
						</p>
					</div>
				</div>
			</section>

			{/* Bloc 3 : aujourd'hui */}
			<section className={`${CLASS_NAME}__section`}>
				<div className={`${CLASS_NAME}__today container`}>
					<div className={`${CLASS_NAME}__today-header`}>
						<p className={`${CLASS_NAME}__today-eyebrow`}>Aujourd'hui</p>
						<h2 className={`${CLASS_NAME}__today-title`}>
							Tourisme, agriculture et patrimoine vivant
						</h2>
						<div className={`${CLASS_NAME}__today-divider`} />
					</div>

					<div className={`${CLASS_NAME}__today-cols`}>
						<div className={`${CLASS_NAME}__today-col`}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
							<p>
								Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
								fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</p>
							<p>
								Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
								laboriosam, nisi ut aliquid ex ea commodi consequatur voluptatem sequi nesciunt.
							</p>
						</div>
						<div className={`${CLASS_NAME}__today-col`}>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
								doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.
							</p>
							<p>
								Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
								consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
							</p>
							<p>
								Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
								adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
								magnam aliquam quaerat voluptatem.
							</p>
						</div>
					</div>

					{/* Repères chiffrés */}
					<div className={`${CLASS_NAME}__stats`}>
						{stats.map((s) => (
							<div key={s.label} className={`${CLASS_NAME}__stat`}>
								<div className={`${CLASS_NAME}__stat-value`}>
									{s.value}
									{s.suffix && <span className={`${CLASS_NAME}__stat-suffix`}>{s.suffix}</span>}
								</div>
								<p className={`${CLASS_NAME}__stat-label`}>{s.label}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
