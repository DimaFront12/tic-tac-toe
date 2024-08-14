import { Component } from "react";
import { FieldLayout } from "./FieldLayout";
import { WIN_PATTERNS } from "../../utils/constants";
import { connect } from "react-redux";

export class FieldContainer extends Component {
	constructor(props) {
		super(props);

		this.handleButton = this.handleButton.bind(this)
	}

	handleButton(index) {
		const updateField = [...this.props.field];
		updateField[index] = this.props.currentPlayer;
		this.props.dispatch({ type: "SET_FIELD", payload: [...updateField] });

		const isWin = WIN_PATTERNS.some((pattern) =>
			pattern.every((item) => updateField[item] === this.props.currentPlayer)
		);

		const isNotEmpty = updateField.every((item) => item !== "");

		if (isWin) {
			this.props.dispatch({ type: "SET_GAME_ENDED", payload: true });
		}

		if (!isWin && isNotEmpty) {
			this.props.dispatch({ type: "SET_IS_DRAW", payload: true });
			this.props.dispatch({ type: "SET_GAME_ENDED", payload: true });
		}

		if (!isWin && !isNotEmpty) {
			this.props.dispatch({
				type: "SET_USER",
				payload: this.props.currentPlayer === "O" ? "X" : "O",
			});
		}
	};

	render() {
		return (
			<FieldLayout
				field={this.props.field}
				handleButton={this.handleButton}
				isGameEnded={this.props.isGameEnded}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	field: state.field,
});

export const Field = connect(mapStateToProps)(FieldContainer);
