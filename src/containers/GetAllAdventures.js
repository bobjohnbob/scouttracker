import { gql, graphql } from 'react-apollo';

export default graphql(gql`
	query GetAllAdventures($scoutID:ID!){
		allAdventures: allAdventures {
			name
			number
			required
			id
		}
		completedAdventures: allCompletedAdventures(filter:{
			scout: { id: $scoutID } 
		}) {
			id
			signer { id }
			adventure { id }
		}
	}
`,{
	options: ({scoutID}) => ({variables: {scoutID}}),
	props: ({ownProps, data}) => {
		const {
			subscribeToMore, 
			completedAdventures, 
			allAdventures
		} = data;
		const subscribeToAdventures = params => {
			return subscribeToMore({
				document: gql`
					subscription subscribeToCompletedAdventures($scoutID:ID!){
						CompletedAdventure(filter: {
							mutation_in: [UPDATED, CREATED, DELETED]
							node: {
								scout: {
									id: $scoutID
								}
							}
						}){
							mutation
							node {
								id
								signer { id }
								adventure { id }
							}
						}
					}
				`,
				variables: {
					scoutID: params.scoutID
				},
				updateQuery: (prev, {subscriptionData}) => {
					if(!subscriptionData.data) {
						return prev;
					}

					let updatedAdventures;
					const updatedID = subscriptionData.node.id;
					const oldAdventures = prev.completedAdventures;

					if(subscriptionData.mutation === "DELETE") {
						updatedAdventures = oldAdventures.filter(adventure => (
							adventure.id !== updatedID
						));
					} else {
						updatedAdventures = [...oldAdventures];
					 	let index = oldAdventures.findIndex(adventure => (
							adventure.id === updatedID
						));
						if(index === -1) index = updatedAdventures.length;
						updatedAdventures[index] = subscriptionData;
					}

					return Object.assign({}, prev, {
						completedAdventures: updatedAdventures
					});
					
				}
			});

		};

		return {
			allAdventures: allAdventures || [],
			completedAdventures: completedAdventures || [],
			subscribeToAdventures,
			...ownProps
		};
	}	
});
