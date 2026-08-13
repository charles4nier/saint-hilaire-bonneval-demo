'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle, Map, X, Mail, MapPin, Send } from 'lucide-react';
import './style.scss';

const CLASS_NAME = 'floating';

type Modal = 'contact' | 'bot' | null;

function ContactModal({
	onClose,
	closing
}: {
	onClose: () => void;
	closing: boolean;
}) {
	return (
		<div
			className={`${CLASS_NAME}__modal ${closing ? `${CLASS_NAME}__modal--closing` : ''}`}
		>
			<div className={`${CLASS_NAME}__modal-header`}>
				<div className={`${CLASS_NAME}__modal-title-group`}>
					<div
						className={`${CLASS_NAME}__modal-icon ${CLASS_NAME}__modal-icon--leaf`}
					>
						<Phone size={16} aria-hidden="true" />
					</div>
					<h2 className={`${CLASS_NAME}__modal-title`}>
						Nous contacter
					</h2>
				</div>
				<button
					className={`${CLASS_NAME}__modal-close`}
					onClick={onClose}
					aria-label="Fermer"
				>
					<X size={18} aria-hidden="true" />
				</button>
			</div>

			<div className={`${CLASS_NAME}__modal-body`}>
				<div className={`${CLASS_NAME}__contact-infos`}>
					<div className={`${CLASS_NAME}__contact-info`}>
						<Phone
							size={15}
							className={`${CLASS_NAME}__contact-info-icon`}
							aria-hidden="true"
						/>
						<div>
							<p className={`${CLASS_NAME}__contact-info-label`}>
								Téléphone
							</p>
							<a
								href="tel:0555006200"
								className={`${CLASS_NAME}__contact-info-value`}
							>
								05 55 00 62 00
							</a>
						</div>
					</div>
					<div className={`${CLASS_NAME}__contact-info`}>
						<Mail
							size={15}
							className={`${CLASS_NAME}__contact-info-icon`}
							aria-hidden="true"
						/>
						<div>
							<p className={`${CLASS_NAME}__contact-info-label`}>
								Email
							</p>
							<a
								href="mailto:mairie@saint-hilaire-bonneval.fr"
								className={`${CLASS_NAME}__contact-info-value`}
							>
								mairie@saint-hilaire-bonneval.fr
							</a>
						</div>
					</div>
					<div className={`${CLASS_NAME}__contact-info`}>
						<MapPin
							size={15}
							className={`${CLASS_NAME}__contact-info-icon`}
							aria-hidden="true"
						/>
						<div>
							<p className={`${CLASS_NAME}__contact-info-label`}>
								Adresse
							</p>
							<p className={`${CLASS_NAME}__contact-info-value`}>
								Le Bourg
								<br />
								87260 Saint-Hilaire-Bonneval
							</p>
						</div>
					</div>
				</div>

				<div className={`${CLASS_NAME}__divider`} />

				<form
					className={`${CLASS_NAME}__form`}
					onSubmit={(e) => e.preventDefault()}
				>
					<p className={`${CLASS_NAME}__form-title`}>
						Envoyer un message
					</p>
					<div className={`${CLASS_NAME}__field`}>
						<label
							htmlFor="floating-contact-name"
							className={`${CLASS_NAME}__label`}
						>
							Nom
						</label>
						<input
							id="floating-contact-name"
							name="name"
							autoComplete="name"
							className={`${CLASS_NAME}__input`}
							type="text"
							placeholder="Votre nom"
						/>
					</div>
					<div className={`${CLASS_NAME}__field`}>
						<label
							htmlFor="floating-contact-email"
							className={`${CLASS_NAME}__label`}
						>
							Email
						</label>
						<input
							id="floating-contact-email"
							name="email"
							autoComplete="email"
							className={`${CLASS_NAME}__input`}
							type="email"
							placeholder="votre@email.fr"
						/>
					</div>
					<div className={`${CLASS_NAME}__field`}>
						<label
							htmlFor="floating-contact-message"
							className={`${CLASS_NAME}__label`}
						>
							Message
						</label>
						<textarea
							id="floating-contact-message"
							name="message"
							className={`${CLASS_NAME}__textarea`}
							rows={4}
							placeholder="Votre message..."
						/>
					</div>
					<button type="submit" className={`${CLASS_NAME}__submit`}>
						<Send size={14} aria-hidden="true" />
						Envoyer
					</button>
				</form>
			</div>
		</div>
	);
}

const suggestions = [
	'Démarches administratives',
	'Horaires de la mairie',
	'Location de salle',
	'Randonnées',
	'Médecins',
	'Commerces & artisans'
];

function BotModal({
	onClose,
	closing
}: {
	onClose: () => void;
	closing: boolean;
}) {
	const [messages, setMessages] = useState<
		{ from: 'user' | 'bot'; text: string }[]
	>([{ from: 'bot', text: 'Bonjour 👋 Que recherchez-vous ?' }]);
	const [input, setInput] = useState('');

	const handleSend = () => {
		if (!input.trim()) return;
		setMessages((m) => [...m, { from: 'user', text: input }]);
		setInput('');
		setTimeout(() => {
			setMessages((m) => [
				...m,
				{
					from: 'bot',
					text: 'Je travaille encore sur ma base de connaissances — revenez bientôt !'
				}
			]);
		}, 600);
	};

	return (
		<div
			className={`${CLASS_NAME}__modal ${closing ? `${CLASS_NAME}__modal--closing` : ''}`}
		>
			<div className={`${CLASS_NAME}__modal-header`}>
				<div className={`${CLASS_NAME}__modal-title-group`}>
					<div
						className={`${CLASS_NAME}__modal-icon ${CLASS_NAME}__modal-icon--coral`}
					>
						<MessageCircle size={16} aria-hidden="true" />
					</div>
					<h2 className={`${CLASS_NAME}__modal-title`}>
						Assistant municipal
					</h2>
				</div>
				<button
					className={`${CLASS_NAME}__modal-close`}
					onClick={onClose}
					aria-label="Fermer"
				>
					<X size={18} aria-hidden="true" />
				</button>
			</div>

			<div
				className={`${CLASS_NAME}__modal-body ${CLASS_NAME}__modal-body--bot`}
			>
				<div className={`${CLASS_NAME}__chat`} aria-live="polite">
					{messages.map((m, i) => (
						<div
							key={i}
							className={`${CLASS_NAME}__message ${CLASS_NAME}__message--${m.from}`}
						>
							{m.text}
						</div>
					))}
				</div>

				<div className={`${CLASS_NAME}__suggestions`}>
					{suggestions.map((s) => (
						<button
							key={s}
							className={`${CLASS_NAME}__suggestion`}
							onClick={() => setInput(s)}
						>
							{s}
						</button>
					))}
				</div>

				<div className={`${CLASS_NAME}__chat-input`}>
					<input
						className={`${CLASS_NAME}__input`}
						type="text"
						placeholder="Posez votre question..."
						aria-label="Votre question"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) => e.key === 'Enter' && handleSend()}
					/>
					<button
						className={`${CLASS_NAME}__send`}
						onClick={handleSend}
						aria-label="Envoyer le message"
					>
						<Send size={15} aria-hidden="true" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default function FloatingButtons() {
	const [activeModal, setActiveModal] = useState<Modal>(null);
	const [isClosing, setIsClosing] = useState(false);
	const pathname = usePathname();
	const isOnMap = pathname === '/tourisme/carte-interactive';

	const handleClose = () => {
		setIsClosing(true);
		setTimeout(() => {
			setActiveModal(null);
			setIsClosing(false);
		}, 280);
	};

	const toggle = (modal: Modal) => {
		if (activeModal === modal) {
			handleClose();
		} else {
			setIsClosing(false);
			setActiveModal(modal);
		}
	};

	useEffect(() => {
		if (!activeModal) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') handleClose();
		};
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeModal]);

	return (
		<>
			{activeModal && (
				<div
					className={`${CLASS_NAME}__backdrop ${isClosing ? `${CLASS_NAME}__backdrop--closing` : ''}`}
					onClick={handleClose}
				/>
			)}

			{activeModal === 'contact' && (
				<ContactModal onClose={handleClose} closing={isClosing} />
			)}
			{activeModal === 'bot' && (
				<BotModal onClose={handleClose} closing={isClosing} />
			)}

			<div className={`${CLASS_NAME}__buttons`}>
				{!isOnMap && (
					<Link
						href="/tourisme/carte-interactive"
						className={`${CLASS_NAME}__btn ${CLASS_NAME}__btn--sunshine`}
						title="Carte interactive"
						aria-label="Carte interactive"
					>
						<Map size={20} aria-hidden="true" />
					</Link>
				)}
				<button
					className={`${CLASS_NAME}__btn ${CLASS_NAME}__btn--coral`}
					onClick={() => toggle('bot')}
					title="Assistant"
					aria-label="Assistant"
				>
					<MessageCircle size={20} aria-hidden="true" />
				</button>
				<button
					className={`${CLASS_NAME}__btn ${CLASS_NAME}__btn--leaf`}
					onClick={() => toggle('contact')}
					title="Contact"
					aria-label="Contact"
				>
					<Phone size={20} aria-hidden="true" />
				</button>
			</div>
		</>
	);
}
