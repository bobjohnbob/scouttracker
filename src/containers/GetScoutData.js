import { gql, graphql } from 'react-apollo';

export default graphql(gql`
	query getScoutData($scoutID:ID!){
		Scout(id: $scoutID) {
			displayName
			advancementDeadline
		}
	}

`,{
	options : ({scoutID}) => ({variables: {scoutID}}),
	name: 'scoutData',
	props: ({ ownProps, data, scoutData }) => {
		const subscribeToData = params => {
			return scoutData.subscribeToMore({
				document: gql`
					subscription subscribeToScoutData($scoutID:ID!){
						Scout(filter: {
							mutation_in: [UPDATED]
							node: {
								id: $scoutID
							}
						}) {
							mutation
							node {
								displayName
								advancementDeadline
							}
						}
					}
				`,
				variables: {
					scoutID: params.scoutID
				},
				updateQuery: (prev, {subscriptionData}) => {
					if(!subscriptionData.data) {
						console.log('no data!');
						return prev;
					}
					console.log('data! : ', prev, ':', subscriptionData);
					return Object.assign({}, prev, {
						Scout: subscriptionData.data.Scout.node
					});
				}
			});
		};
		return scoutData.Scout ? {
			scoutID: ownProps.scoutID,
			displayName: scoutData.Scout.displayName,
			advancementDeadline: scoutData.Scout.advancementDeadline,
			subscribeToData,
			...ownProps
		} : {
			scoutID: ownProps.scoutID,
			subscribeToData,
			...ownProps
		}
	}
});

