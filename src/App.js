import React, { Component } from 'react';
import { getQueryParamByName } from './utils.js';
import ScoutOverviewCont from './containers/GetScoutData.js';
import ScoutOverview from './components/ScoutOverview.js';

const ScoutView = ScoutOverviewCont(ScoutOverview);

class App extends Component {
	render() {
		const scoutID = getQueryParamByName("id", this.props.query);

		return (
			<div className="App">
				<ScoutView scoutID={scoutID} />
			</div>
		);
	}
}

export default App;
