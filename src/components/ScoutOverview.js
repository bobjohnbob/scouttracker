import React from "react";
import AllAdventures from '../containers/GetAllAdventures.js'
import AdventureList from './AdventureList.js';

export default ({
	scoutID, 
	displayName, 
	advancementDeadline,
	completedAdventures,
	completedAchievements
}) => {
	const AdventureListComp = AllAdventures(AdventureList);
	console.log(displayName)
	return (
		<div>
			{displayName}
			<AdventureListComp 
				{...{scoutID, completedAdventures, completedAchievements}}
			/>
		</div>
	);
}
