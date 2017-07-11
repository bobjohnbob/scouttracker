import React from 'react'

import GetAchievements from "../containers/GetAchievementsForAdventure.js";
import AchievementList from "./AchievementList.js";

export default ({id, name, number, isRequired, achievements,
		completedAdventures, completedAchievements}) => {

	const AchievementListComp = GetAchievements(AchievementList);
	return <div>
		<div>{name}</div> 
		<AchievementListComp adventureID={id} completed={completedAchievements}/>
	</div>
}

