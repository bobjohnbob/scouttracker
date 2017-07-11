import { gql, graphql } from 'react-apollo';

import { stripEdges } from '../utils.js';

export default graphql(gql`
	query GetAllAdventuresForRank{
		viewer {
			allAdventures {
				edges {
					node {
						name,
						number,
						required,
						id
					}
				}
			}
		}
	}
`,{
	props: ({ownProps, data}) => (
		data.viewer ? {
			allAdventures: stripEdges(data.viewer.allAdventures),
			...ownProps
		} : {...ownProps})
});




