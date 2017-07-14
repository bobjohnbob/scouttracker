import { gql, graphql } from 'react-apollo';

export default graphql(gql`
	query GetAchievementsForAdventure($adventureID:ID!){
		allAchievements(filter: {
			adventure: {
				id: $adventureID
			}
		}) {
			id,
			number,
			letter,
			description,
			additionalText
		}
	}
`,{
	options: ({adventureID}) => {
		return {
			variables: {
				adventureID
			}
		};
	},
	props: ({ownProps, data}) => {
		return data.allAchievements ? {
			achievements: data.allAchievements,
			...ownProps
		} : {...ownProps}

	}
});
