import React from "react";
import { gql, graphql } from 'react-apollo';

export default graphql(gql`
	query GetScoutData($scoutID:ID!){
		getScout(id: $scoutID){
			displayName,
			advancementDeadline,
			adventures {
				edges {
					node {
						name
					}
				}
			},
			achievements {
				edges {
					node {
						name
					}
				}
			}
		}
	}
`,{
	options : ({scoutID}) => ({variables: {scoutID}}),
	props: ({ ownProps, data }) => (
		data.getScout ? {
			scoutID: ownProps.scoutID,
			displayName: data.getScout.displayName,
			completedAdventures: data.getScout.adventures,
			completedAchievements: data.getScout.achievements,
			advancementDeadline: data.getScout.advancementDeadline
		} : {
			scoutID: ownProps.scoutID
		}
	)
});
