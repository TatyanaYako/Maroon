import React from 'react';
import Bestsellers from './Bestsellers/Bestsellers';
import NewCollection from './NewCollection/NewCollection';
import Individual from './Individual/Individual';
import History from './History/History';

function MainPage() {
	return (
		<main>
			<Bestsellers />
			<NewCollection />
			<Individual />
			<History />
		</main>
	);
}

export default MainPage;