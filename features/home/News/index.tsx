import { Calendar, ArrowRight } from 'lucide-react';
import './style.scss';

const CLASS_NAME = 'news';

const articles = [
	{
		date: '12 Mai',
		cat: 'Conseil municipal',
		title: 'Compte-rendu de la séance du 5 mai 2026',
		excerpt: "Budget primitif, voirie communale et nouveaux aménagements de l'étang."
	},
	{
		date: '08 Mai',
		cat: 'Vie locale',
		title: 'Marché de producteurs : nouvelle saison',
		excerpt: 'Tous les samedis matin sur la place du village, de mai à septembre.'
	},
	{
		date: '01 Mai',
		cat: 'Travaux',
		title: 'Rénovation de la salle des fêtes',
		excerpt: "Les travaux débutent en juin pour une livraison prévue à l'automne."
	}
];

export default function News() {
	return (
		<section className={CLASS_NAME}>
			<div className="container">
				<div className={`${CLASS_NAME}__header`}>
					<div className={`${CLASS_NAME}__header-text`}>
						<p className="eyebrow">Actualités municipales</p>
						<h2 className={`${CLASS_NAME}__title`}>
							Les dernières nouvelles de la commune
						</h2>
						<div className="divider-line" />
					</div>
					<a href="#" className="btn-outline">
						Toutes les actualités <ArrowRight size={16} />
					</a>
				</div>

				<div className={`${CLASS_NAME}__grid`}>
					{articles.map((article) => (
						<article key={article.title} className={`${CLASS_NAME}__card`}>
							<div className={`${CLASS_NAME}__card-meta`}>
								<span className={`${CLASS_NAME}__card-date`}>
									<Calendar size={14} />
									{article.date}
								</span>
								<span className={`${CLASS_NAME}__card-sep`} />
								<span className={`${CLASS_NAME}__card-cat`}>{article.cat}</span>
							</div>
							<h3 className={`${CLASS_NAME}__card-title`}>{article.title}</h3>
							<p className={`${CLASS_NAME}__card-excerpt`}>{article.excerpt}</p>
							<div className={`${CLASS_NAME}__card-link`}>
								Lire la suite
								<ArrowRight size={16} />
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
