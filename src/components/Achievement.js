import React from 'react';
import { gql, graphql } from 'react-apollo';

export default({
	id, 
	number, 
	completed, 
	letter, 
	description, 
	additionalText,
	scoutID,
	mutate
}) => {
	if(completed) {
		return <div className='completed-achievement'>
			{number}{letter}
		</div>;
	} else {

		const variables = {
			scoutID,
			id,
			date: (new Date(Date.now())).toISOString()
		};

		return <button onClick={() => mutate({variables})} className='achievement'>
			{number}{letter}
		</button>;
	}
};
