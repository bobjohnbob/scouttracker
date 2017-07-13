import React from "react";
import AllAdventures from '../containers/GetAllAdventures.js'
import AdventureList from './AdventureList.js';
import AppBar from 'material-ui/AppBar';

export default ({
	scoutID, 
	displayName, 
	advancementDeadline,
	completedAdventures,
	completedAchievements
}) => {
	const appBarProps = {
		title: displayName,
		showMenuIconButton: false
	}
	const AdventureListComp = AllAdventures(AdventureList);
	console.log(displayName)
	return (
		<div>
			<AppBar {...appBarProps} />
			<AdventureListComp 
				{...{scoutID, completedAdventures, completedAchievements}}
			/>
		</div>
	);
}
