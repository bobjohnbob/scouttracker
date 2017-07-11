import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

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
