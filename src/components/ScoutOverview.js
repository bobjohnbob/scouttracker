import React from "react";

export default ({
	scoutID, 
	displayName, 
	advancementDeadline,
	completedAdventures,
	completedAchievements
}) => {
	console.log(displayName)
	return (
		<div>
			{displayName}
		</div>
	);
}
