import React from 'react';
import ReactDOM from 'react-dom';
import { 
	ApolloClient, 
	createNetworkInterface,
	ApolloProvider
} from 'react-apollo';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';

// Needed for onTouchTap in materialUI
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const client = new ApolloClient({
	networkInterface: createNetworkInterface({
		uri: 'https://us-west-2.api.scaphold.io/graphql/scout'
	})
});

const loc = window.location;

console.log("location: ", loc);

ReactDOM.render(
	<MuiThemeProvider>
		<ApolloProvider client={client}>
			<App slug={loc.pathname} query={loc.search} />
		</ApolloProvider>
	</MuiThemeProvider>, 
	document.getElementById('root')
);

//registerServiceWorker();
