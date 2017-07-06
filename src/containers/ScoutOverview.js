import React from "react";
import { gql, graphql } from 'react-apollo';

export default graphql(gql`
	query GetScoutData($scoutID:ID!){
		getScout(id: $scoutID){
			displayName,
			advancementDeadline,
			adventures,
			acheivments,
		}
	}
`,{
	options : ({scoutID}) => ({variables: {scoutID}}),
	props: ({ ownProps, data }) => {
		scoutID: ownProps.scoutID,
		displayName: data.getScout.displayName,
		completedAdventures: data.getScout.adventures,
		completedAchievements: data.getScout.achievements,
		advancementDeadline: data.getScout.advancementDeadline
});
