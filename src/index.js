import React from 'react';
import ReactDOM from 'react-dom';

import { 
	ApolloClient, 
	createNetworkInterface,
	ApolloProvider
} from 'react-apollo';
import { 
	SubscriptionClient,
	addGraphQLSubscriptions
} from 'subscriptions-transport-ws';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';

// Needed for onTouchTap in materialUI
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const httpInterface = createNetworkInterface({
	uri: "https://api.graph.cool/simple/v1/cj53el7vnpphz01759pf8l7ou"
});

const wsClient = new SubscriptionClient("wss://subscriptions.us-west-2.graph.cool/v1/cj53el7vnpphz01759pf8l7ou", {
	reconnect: true
});

const networkInterface = addGraphQLSubscriptions(httpInterface, wsClient);

const client = new ApolloClient({ networkInterface });

const location = window.location;

ReactDOM.render(
	<MuiThemeProvider>
		<ApolloProvider client={client}>
			<App slug={location.pathname} query={location.search} />
		</ApolloProvider>
	</MuiThemeProvider>, 
	document.getElementById('root')
);

//registerServiceWorker(); //See import above
