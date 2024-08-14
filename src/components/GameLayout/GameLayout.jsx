import { Information } from "../Information/Information";
import { Field } from "../Field/Field";
import { connect } from "react-redux";
import { Component } from "react";

export class GameLayoutContainer extends Component {
	constructor(props) {
		super(props);

		this.again = this.again.bind(this)
	}

	again() {
		this.props.dispatch({ type: "RESET_FIELD" });
	}

	render() {
		return (
			<>
				<Information />
				<Field />
				<button className="flex justify-center ml-[130px] mb-[70px] bg-zinc-400 p-[10px] rounded-[13px]" onClick={this.again}>
					Начать заново
				</button>
			</>
		);
	}
}

export const GameLayout = connect()(GameLayoutContainer);
