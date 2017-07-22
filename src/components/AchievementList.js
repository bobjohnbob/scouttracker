import React from 'react';
import Achievement from './Achievement.js';
import CompleteAchievement from '../containers/CompleteAchievement.js';
import {Div} from 'glamorous';

const AchievementButton = CompleteAchievement(Achievement);

export default class AchievementList extends React.Component {
	
	componentWillMount() {
		this.unsubscribe = this.props.subscribeToAchievements({
			scoutID: this.props.scoutID,
			adventureID: this.props.adventureID
		});
	}

	render() {
		const {
			allAchievements,
			completedAchievements,
			scoutID
		} = this.props;

		const completedMap = completedAchievements.reduce((map, ach) => {
			map[ach.achievement.id] = ach;
			return map
		}, {});
		
		if(!allAchievements || !allAchievements.length) {
			return <div>Loading...</div>
		}
		
		const list = [...allAchievements].sort((a, b) => {
			if (a.number === b.number)
				return a.letter > b.letter;
			return a.number > b.number;
		}).map(achievement => {
			const props = {
				key: achievement.id,
				completed: completedMap[achievement.id],
				scoutID,
				...achievement
			};
			return <AchievementButton {...props} />
		});
		
		return <Div disply="flex" padding="0.5rem">
			{list}
		</Div>
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

}
