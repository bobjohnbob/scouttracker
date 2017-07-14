import React from 'react'

import Achievement from "./Achievement.js";

export default ({achievements, id, completed}) => {
	console.log("completed: ", completed);
	if(!achievements) {
		return <div>Loading...</div>
	}
	
	const list = [...achievements].sort((a, b) => {
		if (a.number === b.number)
			return a.letter > b.letter;
		return a.number > b.number;
	}).map(achievement => (
		<Achievement key={achievement.id} {...achievement} />
	));
	
	return <div>
		{list}
	</div>
}
