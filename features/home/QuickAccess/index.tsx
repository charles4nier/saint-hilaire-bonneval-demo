import { FileText, Gavel, Phone, CalendarDays, ArrowUpRight } from 'lucide-react';
import './style.scss';

const CLASS_NAME = 'quick-access';

const items = [
	{
		icon: FileText,
		title: 'Démarches administratives',
		desc: 'État civil, urbanisme, demandes en quelques clics.',
		mod: 'primary'
	},
	{
		icon: Gavel,
		title: 'Délibérations & Actes',
		desc: 'Comptes-rendus du conseil municipal et arrêtés.',
		mod: 'coral'
	},
	{
		icon: Phone,
		title: 'Services & Urgences',
		desc: 'Numéros utiles et services publics à proximité.',
		mod: 'leaf'
	},
	{
		icon: CalendarDays,
		title: "Agenda du village",
		desc: 'Marchés, festivités, vie associative et culturelle.',
		mod: 'sunshine'
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
							<h2 className={`${CLASS_NAME}__title`}>Vos démarches administratives</h2>
						</div>
						<a href="#" className={`${CLASS_NAME}__all-link`}>
							Tous les services <ArrowUpRight size={16} />
						</a>
					</div>

					<div className={`${CLASS_NAME}__grid`}>
						{items.map((item) => {
							const Icon = item.icon;
							return (
								<a key={item.title} href="#" className={`${CLASS_NAME}__item`}>
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
