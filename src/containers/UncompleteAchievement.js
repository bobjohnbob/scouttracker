import { gql, graphql } from 'react-apollo';

export default graphql(gql`
		mutation UnmarkAchievementComplete($id:ID!){
		deleteCompletedAchievement(
			id: $id
		) {
			id
		}
	}
`, {
	name: 'uncompleteAchievement'
});
