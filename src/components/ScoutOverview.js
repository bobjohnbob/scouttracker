import React from "react";
import AllAdventures from '../containers/GetAllAdventures.js'
import AdventureList from './AdventureList.js';
import AppBar from 'material-ui/AppBar';

const AdventureListComp = AllAdventures(AdventureList);

export default class ScoutOverview extends React.Component {

	componentWillMount() {
		this.unsubscribe = this.props.subscribeToData({
			scoutID: this.props.scoutID
		});
	}

	render() {
		const {
			scoutID, 
			displayName, 
		} = this.props;
		const appBarProps = {
			title: displayName,
			showMenuIconButton: false
		}
		return (
			<div>
				<AppBar {...appBarProps} />
				<AdventureListComp
					scoutID = {scoutID}
				/>
			</div>
		);
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

}
