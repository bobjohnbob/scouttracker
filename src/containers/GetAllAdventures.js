import { gql, graphql } from 'react-apollo';

export default graphql(gql`
	query GetAllAdventures{
		allAdventures {
			name,
			number,
			required,
			id
		}
	}
`,{
	props: ({ownProps, data}) => (
		data.allAdventures ? {
			allAdventures: data.allAdventures,
			...ownProps
		} : {...ownProps})
});




