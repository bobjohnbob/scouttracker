import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { 
	ApolloClient, 
	createNetworkInterface,
	ApolloProvider
} from 'react-apollo';

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: 'https://us-west-2.api.scaphold.io/graphql/scout'
	})
});

const loc = window.location;

console.log("location: ", loc);

ReactDOM.render(
	<ApolloProvider client={client}>
		<App slug={loc.pathname} query={loc.search} />
	</ApolloProvider>, 
	document.getElementById('root')
);

//registerServiceWorker();
