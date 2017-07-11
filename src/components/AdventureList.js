import React from "react"
import { splitFilter } from '../utils.js';
import Adventure from './Adventure.js';

export default ({
	allAdventures,
	completedAdventures
}) => {
	if(!allAdventures) {
		return <div> Loading... </div>
	}

	const sortedAdventures =  allAdventures.sort((a,b) => (a.number > b.number));

	const [
		requiredAdventures, 
		optionalAdventures
	] = splitFilter(sortedAdventures, a => a.required);

	const requiredAdventureList = requiredAdventures.map(adventure => {
		return <Adventure key={adventure.id} {...adventure} />;
	});

	const optionalAdventureList = optionalAdventures.map(adventure => {
		return <Adventure key={adventure.id} {...adventure} />;
	});

	return <div>
		<div>
			{requiredAdventureList}
		</div>
		<div>
			{
				//optionalAdventureList
			}
		</div>
	</div>;
}

