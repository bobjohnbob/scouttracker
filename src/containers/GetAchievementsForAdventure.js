import { gql, graphql } from 'react-apollo';

export default graphql(gql`
	query GetAchievementsForAdventure($adventureID:ID! $scoutID:ID!){
		all: allAchievements(filter: {
			adventure: {id: $adventureID}
		}) {
			id
			number
			letter
			description
			additionalText
		}
		completed: allCompletedAchievements(filter:{
			scout: {id: $scoutID}
			achievement: {
				adventure: {id: $adventureID}
			}
		}) {
			id
			completedAt
			achievement {
				id
			}
		}
	}
`,{
	options: ({adventureID, scoutID}) => ({variables: { adventureID, scoutID }}),
	props: ({ownProps, data}) => {
		const {
			subscribeToMore,
			all,
			completed
		} = data;

		const subscribeToAchievements = params => {
			return subscribeToMore({
				document: gql`
					subscription subscribeToCompAch($scoutID:ID!, $adventureID:ID!){
						CompletedAchievement(filter: {
							mutation_in: [UPDATED, CREATED, DELETED]
							node: {
								scout: {
									id: $scoutID
								}
								achievement: {
									adventure: {
										id: $adventureID
									}
								}
							}
						}){
							mutation
							node {
								id
								completedAt
								achievement {
									id
								}
							}
							previousValues {
								id
							}
						}
					}
				`,
				variables: {
					scoutID: params.scoutID,
					adventureID: params.adventureID
				},
				updateQuery: (prev, response) => {
					const subscriptionData = response.subscriptionData.data.CompletedAchievement;
					console.log("UPDATE! :", response);

					let updatedAchievements;
					const oldAchievements = prev.completed
					
					if(subscriptionData.mutation === 'DELETED') {
						updatedAchievements = oldAchievements.filter(ach => (
							ach.id !== subscriptionData.previousValues.id
						));
					} else {
						const updatedID = subscriptionData.node.id;
						updatedAchievements = [...oldAchievements];
						let index = oldAchievements.findIndex(adventure => (
							adventure.id === updatedID
						));
						if(index === -1) index = updatedAchievements.length;
						updatedAchievements[index] = subscriptionData.node;
					}

					return Object.assign({}, prev, {
						completed: updatedAchievements
					});
				}
			});
		};

		return {
			allAchievements: all || [],
			completedAchievements: completed || [],
			subscribeToAchievements,
			...ownProps
		};
	}
});
