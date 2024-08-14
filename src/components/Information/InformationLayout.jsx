import { Component } from "react";
import PropTypes from "prop-types";

export class InformationLayout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { isDraw, isGameEnded, currentPlayer } = this.props;
		return (
			<div className="text-center mb-[55px] text-[30px]">
				<p>
					{isDraw === false &&
						isGameEnded === false &&
						`Ходит: ${currentPlayer}`}
				</p>
				<p>
					{isDraw
						? "Ничья"
						: isGameEnded && `Победа: ${currentPlayer}`}
				</p>
			</div>
		);
	}
}

InformationLayout.propTypes = {
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
