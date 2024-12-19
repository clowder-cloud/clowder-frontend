import React from 'react';
import CatFromAxios from '../Interfaces/CatFromAxios';
import Card from './Styling/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

interface Props {
	cat: CatFromAxios;
	setSelectedCat: React.Dispatch<React.SetStateAction<CatFromAxios | null>>;
}

export default function CatCard({ cat, setSelectedCat }: Props) {
	return (
		<Card heading={cat.name}>
			<div className="flex justify-between h-10 sm:h-16">
				<img
					src={cat.picture_url ?? ''}
					alt={cat.name}
					className="w-10 h-10 sm:w-16 sm:h-16"
				/>
				<div>
					<p>Level: {cat.battle_profile.level.toString()}</p>
					<p>XP: {cat.battle_profile.xp.toString()}</p>
				</div>
				<p>{cat.description ?? 'A good kitty'}</p>
				<FontAwesomeIcon
					className="h-full"
					icon={faPenToSquare}
					onClick={() => {
						setSelectedCat(cat);
					}}
				/>
			</div>
		</Card>
	);
}
