import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, MapPin } from 'lucide-react';
import './style.scss';

const CLASS_NAME = 'commune';

const stats = [
	{ value: '1 022', label: 'Habitants' },
	{ value: '28,9', suffix: 'km²', label: 'Superficie' },
	{ value: '1', label: 'École primaire publique' },
	{ value: '15+', label: 'Commerces & artisans' },
];

export default function CommunePage() {
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
						<span>La commune</span>
					</nav>
					<p className={`${CLASS_NAME}__eyebrow`}>
						<MapPin size={14} />
						Vivre à Saint-Hilaire-Bonneval
					</p>
					<h1 className={`${CLASS_NAME}__title`}>La commune</h1>
					<div className={`${CLASS_NAME}__divider`} />
					<p className={`${CLASS_NAME}__subtitle`}>
						<span className={`${CLASS_NAME}__subtitle-upper`}>Un village à taille humaine</span>
						<br />
						<span className={`${CLASS_NAME}__subtitle-script`}>au cœur du Limousin</span>
					</p>
				</div>
			</section>

			{/* Bloc 1 : portrait */}
			<section className={`${CLASS_NAME}__section`}>
				<div className={`${CLASS_NAME}__section-inner container`}>
					<div className={`${CLASS_NAME}__block-card`}>
						<p className={`${CLASS_NAME}__block-eyebrow`}>Portrait</p>
						<h2 className={`${CLASS_NAME}__block-title`}>
							Une commune rurale aux multiples atouts
						</h2>
						<div className={`${CLASS_NAME}__block-body`}>
							<p>
								Nichée au cœur de la Haute-Vienne, Saint-Hilaire-Bonneval est une commune
								rurale qui conjugue douceur de vivre, nature préservée et services de proximité.
								À quelques kilomètres de Limoges, elle offre un cadre de vie idéal pour les
								familles comme pour les personnes souhaitant s'éloigner de l'agitation urbaine.
							</p>
							<p>
								Avec ses étangs, ses forêts et son patrimoine bâti remarquable, la commune
								attire chaque année de nouveaux habitants séduits par la qualité de l'environnement
								et la richesse du tissu associatif et commercial local.
							</p>
							<p>
								La municipalité s'engage au quotidien pour maintenir et développer les services
								essentiels : école, commerces, infrastructures sportives et culturelles, afin
								que chacun puisse trouver ici sa place.
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
								alt="Forêts et nature"
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

			{/* Bloc 2 : cadre de vie */}
			<section className={`${CLASS_NAME}__section ${CLASS_NAME}__section--muted`}>
				<div className={`${CLASS_NAME}__evolution container`}>
					<p className={`${CLASS_NAME}__evolution-eyebrow`}>Cadre de vie</p>
					<h2 className={`${CLASS_NAME}__evolution-title`}>
						Nature, calme et proximité avec Limoges
					</h2>
					<div className={`${CLASS_NAME}__evolution-divider`} />
					<div className={`${CLASS_NAME}__evolution-body`}>
						<p>
							Saint-Hilaire-Bonneval bénéficie d'une situation géographique privilégiée, à
							moins de 20 minutes du centre de Limoges, tout en conservant le charme et la
							tranquillité d'un village rural. Ses habitants profitent du meilleur des deux
							mondes : la nature à portée de main et l'accès rapide aux services d'une grande ville.
						</p>
						<p>
							Le territoire communal est traversé par plusieurs cours d'eau et ponctué d'étangs
							qui constituent autant de lieux de promenade, de pêche et de détente. Les sentiers
							balisés permettent d'explorer à pied ou à vélo un paysage de bocage typiquement
							limousin, préservé et varié.
						</p>
						<p>
							L'école primaire publique, le terrain de sport, la salle des fêtes et les nombreuses
							associations assurent une vie locale dynamique, propice à l'épanouissement de tous,
							des plus jeunes aux séniors.
						</p>
						<p>
							La commune veille également à son développement durable : gestion raisonnée des
							espaces verts, entretien du patrimoine bâti, soutien aux initiatives locales et
							accompagnement des projets de ses habitants.
						</p>
					</div>
				</div>
			</section>

			{/* Bloc 3 : services & chiffres */}
			<section className={`${CLASS_NAME}__section`}>
				<div className={`${CLASS_NAME}__today container`}>
					<div className={`${CLASS_NAME}__today-header`}>
						<p className={`${CLASS_NAME}__today-eyebrow`}>Services & vie locale</p>
						<h2 className={`${CLASS_NAME}__today-title`}>
							Tout le nécessaire à portée de la commune
						</h2>
						<div className={`${CLASS_NAME}__today-divider`} />
					</div>

					<div className={`${CLASS_NAME}__today-cols`}>
						<div className={`${CLASS_NAME}__today-col`}>
							<p>
								La commune dispose d'un tissu de commerces et d'artisans locaux qui répondent
								aux besoins du quotidien : alimentation, restauration, artisans du bâtiment,
								professionnels de santé et bien d'autres encore. Ce tissu économique de proximité
								est un atout précieux pour la qualité de vie des habitants.
							</p>
							<p>
								L'école primaire publique accueille les enfants du village et des communes
								voisines dans un environnement sécurisé et bienveillant. La mairie œuvre pour
								maintenir et améliorer les conditions d'accueil des élèves et soutient les
								initiatives pédagogiques de l'équipe enseignante.
							</p>
							<p>
								Le réseau associatif est particulièrement riche : sport, culture, entraide,
								loisirs… Les associations de Saint-Hilaire-Bonneval animent la vie locale tout
								au long de l'année et constituent un lien social essentiel entre les habitants.
							</p>
						</div>
						<div className={`${CLASS_NAME}__today-col`}>
							<p>
								La mairie assure l'ensemble des services administratifs de proximité : état
								civil, urbanisme, affichage légal, location de salles communales. Les élus et
								les agents municipaux sont à la disposition des habitants pour répondre à leurs
								questions et les accompagner dans leurs démarches.
							</p>
							<p>
								Les infrastructures sportives et culturelles — terrain de foot, salle polyvalente,
								aires de jeux — sont entretenues et régulièrement améliorées pour répondre aux
								attentes de la population et accueillir les événements de la vie communale.
							</p>
							<p>
								Saint-Hilaire-Bonneval s'inscrit également dans une démarche de développement
								touristique en valorisant son patrimoine naturel et bâti, ses sentiers de
								randonnée et son plan d'eau, qui accueillent chaque année de nombreux visiteurs.
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
