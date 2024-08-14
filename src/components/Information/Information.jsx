import { Component } from "react";
import { InformationLayout } from "./InformationLayout";
import { connect } from "react-redux";

export class InformationContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { isGameEnded, isDraw, currentPlayer } = this.props
		return (
			<InformationLayout
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				currentPlayer={currentPlayer}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer:  state.currentPlayer
})

export const Information = connect(mapStateToProps)(InformationContainer);
