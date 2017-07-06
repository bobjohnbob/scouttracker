import React, { Component } from 'react';
import { getQueryParamByName } from './utils.js';
import ScoutOverviewCont from './containers/ScoutOverview.js';
import ScoutOverview from './components/ScoutOverview.js';

class App extends Component {
	render() {
		const scoutID = getQueryParamByName("id", this.props.slug);
		var MainView = ScoutOverviewCont(ScoutOverview);

		return (
			<div className="App">
				<MainView scoutID={scoutID} />
			</div>
		);
	}
}

export default App;
