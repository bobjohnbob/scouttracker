import { gql, graphql } from 'react-apollo';
import { stripEdges } from '../utils.js';

export default graphql(gql`
	query GetAchievementsForAdventure($adventureID:ID!){
		getAdventure(id:$adventureID) {
			achievements {
				edges {
					node {
						id,
						number,
						letter,
						description,
						additionalText
					}
				}
			}
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
		return data.getAdventure ? {
			achievements: stripEdges(data.getAdventure.achievements),
			...ownProps
		} : {...ownProps}

	}
});
