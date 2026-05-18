import { FileText, Gavel, Phone, CalendarDays, ArrowUpRight } from 'lucide-react';
import './style.scss';

const CLASS_NAME = 'quick-access';

const items = [
	{
		icon: FileText,
		title: 'Démarches administratives',
		desc: 'État civil, urbanisme, demandes en quelques clics.',
		mod: 'primary',
		href: '/demarches'
	},
	{
		icon: Gavel,
		title: 'Délibérations & Actes',
		desc: 'Comptes-rendus du conseil municipal et arrêtés.',
		mod: 'coral',
		href: '/mairie/publications'
	},
	{
		icon: Phone,
		title: 'Services & Urgences',
		desc: 'Numéros utiles et services publics à proximité.',
		mod: 'leaf',
		href: '/numeros-utiles'
	},
	{
		icon: CalendarDays,
		title: "Agenda du village",
		desc: 'Marchés, festivités, vie associative et culturelle.',
		mod: 'sunshine',
		href: '#'
	}
] as const;

export default function QuickAccess() {
	return (
		<section id="demarches" className={CLASS_NAME}>
			<div className="container">
				<div className={`${CLASS_NAME}__card`}>
					<div className={`${CLASS_NAME}__header`}>
						<div>
							<p className="eyebrow">Services en ligne</p>
							<h2 className={`${CLASS_NAME}__title`}>L'essentiel en un clic</h2>
						</div>
					</div>

					<div className={`${CLASS_NAME}__grid`}>
						{items.map((item) => {
							const Icon = item.icon;
							return (
								<a key={item.title} href={item.href} className={`${CLASS_NAME}__item`}>
									<div className={`${CLASS_NAME}__item-icon ${CLASS_NAME}__item-icon--${item.mod}`}>
										<Icon size={20} strokeWidth={2} />
									</div>
									<h3 className={`${CLASS_NAME}__item-title`}>{item.title}</h3>
									<p className={`${CLASS_NAME}__item-desc`}>{item.desc}</p>
									<ArrowUpRight size={16} className={`${CLASS_NAME}__item-arrow`} />
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
