import React from 'react'

import GetAchievements from '../containers/GetAchievementsForAdventure.js';
import AchievementList from './AchievementList.js';
import {Card, CardHeader} from 'material-ui/Card';

const AchievementListComp = GetAchievements(AchievementList);

export default ({
	id, 
	name, 
	number, 
	isRequired, 
	achievements, 
	completed,
	scoutID
}) => {

	const className = `adventure ${completed ? 'completed-adventure' :''}`;
	return <Card className={className}>
		<CardHeader title={name} /> 
		<AchievementListComp 
			scoutID = {scoutID} 
			adventureID={id} 
		/>
	</Card>
}

