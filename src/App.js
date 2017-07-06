import React, { Component } from 'react';
import { getQueryParamByName } from './utils.js';
import ScoutOverview from './containers/ScoutOverview.js';

class App extends Component {
	render() {
		const scoutID = getQueryParamByName("id", this.props.slug);
		return (
			<div className="App">
				<ScoutOverview scoutID={scoutID} />
			</div>
		);
	}
}

export default App;
