import React from 'react';
import { gql, graphql } from 'react-apollo';
import { Div } from 'glamorous';

const blue = "#00BCD4";
const size = 2.6;
const size_rem = `${size}rem`;
const pad = "0.5rem";

export default({
	id, 
	number, 
	completed, 
	letter, 
	description, 
	additionalText,
	scoutID,
	completeAchievement,
	uncompleteAchievement
}) => {
	if(completed) {
		console.log("Completed: ", completed);
		const variables = {
			id: completed.id
		};
		return <Div 
			onClick={()=>{uncompleteAchievement({variables})}}
			fontSize={`${size/2}rem`}
			border={`0.2rem solid ${blue}`}
			display="inline-flex"
			color="white"
			backgroundColor={blue}
			width={size_rem}
			height={size_rem}
			borderRadius={size_rem}
			margin={pad}
			cursor="pointer"
		>
			<Div 
				display="flex" 
				width={size_rem} 
				height={size_rem} 
				justifyContent="center" 
				alignItems="center"
			>
				<Div display="inline-flex">{number}{letter}</Div>
			</Div>
		</Div>
	} else {

		const variables = {
			scoutID,
			id,
			date: (new Date(Date.now())).toISOString()
		};

		return <Div
			onClick={()=>{completeAchievement({variables})}}
			fontSize={`${size/2}rem`}
			border={`0.15rem solid ${blue}`}
			display="inline-flex"
			color={blue}
			width={size_rem}
			height={size_rem}
			borderRadius={size_rem}
			margin={pad}
			cursor="pointer"
		>
			<Div 
				display="flex" 
				width={size_rem} 
				height={size_rem} 
				justifyContent="center" 
				alignItems="center"
			>
				<Div display="inline-flex">{number}{letter}</Div>
			</Div>
		</Div>
	}
};

