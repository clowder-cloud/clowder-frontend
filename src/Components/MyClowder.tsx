import React, { useContext, useEffect, useState } from 'react';
import CatProfile from './CatProfile';
import H2 from './Styling/H2';
import ModalPopover from './Styling/ModalPopover';
import { getCatsProfiles } from '../network';
import { UserContext } from '../Contexts/UserContext';
import CatFromAxios from '../Interfaces/CatFromAxios';
import CatCard from './CatCard';

export default function MyClowder() {
	const { userId } = useContext(UserContext);
	const [myCats, setMyCats] = useState<CatFromAxios[]>([]);
	const [selectedCat, setSelectedCat] = useState<CatFromAxios | null>(null);

	useEffect(() => {
		if (userId) {
			getCatsProfiles(userId).then((cats) => {
				if (cats) {
					setMyCats(cats);
				}
			});
		}
	}, [userId]);

	return selectedCat ? (
		<ModalPopover>
			<CatProfile />
		</ModalPopover>
	) : (
		<>
			<H2>My Clowder</H2>
			<ul>
				{myCats.map((cat) => (
					<li key={cat.id}>
						<CatCard cat={cat} setSelectedCat={setSelectedCat} />
					</li>
				))}
			</ul>
		</>
	);
}
