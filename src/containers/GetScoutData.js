import { gql, graphql } from 'react-apollo';

export default graphql(gql`
	query getScoutData($scoutID:ID!){
		Scout(id: $scoutID) {
			displayName
			advancementDeadline
			completedAdventures {
				id
				name
			}
			completedAchievements {
				id
				number
				letter
			}
		}
	}

`,{
	options : ({scoutID}) => ({variables: {scoutID}}),
	props: ({ ownProps, data }) => (
		data.Scout ? {
			scoutID: ownProps.scoutID,
			displayName: data.Scout.displayName,
			advancementDeadline: data.Scout.advancementDeadline,
			completedAdventures: data.Scout.completedAdventures,
			completedAchievements: data.Scout.completedAchievements
		} : {
			scoutID: ownProps.scoutID
		}
	)
});
