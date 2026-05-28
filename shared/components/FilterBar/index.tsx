'use client';

import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import './style.scss';

const B = 'filter-bar';

type Props = {
	filters: string[];
	active: string;
	counts: Record<string, number>;
	onSelect: (filter: string) => void;
	stuck: boolean;
	filtersOpen: boolean;
	onToggle: () => void;
	variant?: 'default' | 'warm';
};

export default function FilterBar({
	filters,
	active,
	counts,
	onSelect,
	stuck,
	filtersOpen,
	onToggle,
	variant = 'default',
}: Props) {
	const modifiers = [
		stuck && `${B}--stuck`,
		stuck && variant === 'warm' && `${B}--stuck-warm`,
	].filter(Boolean).join(' ');

	return (
		<div className={`${B} ${modifiers}`}>
			<div className="container">
				<button className={`${B}__toggle`} onClick={onToggle}>
					<SlidersHorizontal size={14} />
					<span>Filtres</span>
					{active !== filters[0] && <span className={`${B}__badge`}>1</span>}
					<ChevronDown
						size={14}
						className={`${B}__arrow${filtersOpen ? ` ${B}__arrow--open` : ''}`}
					/>
				</button>
				<div className={`${B}__panel${filtersOpen ? ` ${B}__panel--open` : ''}`}>
					<div className={`${B}__panel-inner`}>
						<div className={`${B}__pills`}>
							{filters.map((f) => (
								<button
									key={f}
									onClick={() => onSelect(f)}
									className={`${B}__pill${active === f ? ` ${B}__pill--active` : ''}`}
								>
									{f}
									<span className={`${B}__count`}>{counts[f] ?? 0}</span>
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
