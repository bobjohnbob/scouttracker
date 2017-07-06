import React from "react";
import { gql, graphql } from 'react-apollo';

function ScoutOverview({data, scoutID}) {
	console.log(data);
	return (
		<div>
			{data.getScout && data.getScout.displayName}
		</div>
	);
}

export default graphql(gql`
	query GetScoutData($scoutID:ID!){
		getScout(id: $scoutID){
			displayName
		}
	}
`,{options : ({scoutID}) => {
	console.log("Building var! scoutId: ", scoutID);
	return {variables: {scoutID}};
}})(ScoutOverview);
