import { gql, graphql } from 'react-apollo';

export default graphql(gql`
	mutation MarkAchievementComplete($id:ID!, $scoutID:ID!, $date:DateTime!){
		createCompletedAchievement(
			completedAt: $date
			achievementId: $id
		    scoutId: $scoutID
		) {
			id
		}
	}
`)
