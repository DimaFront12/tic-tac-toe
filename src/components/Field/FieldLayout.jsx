import { Component } from "react";

export class FieldLayout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="w-full h-full bg-[#8AAAFF] rounded-[25px] mb-[70px] grid grid-cols-3 gap-[4px]">
				{this.props.field.map((item, index) => (
					<button
						className={`w-[146px] h-[146px] bg-[#B1D0FF] flex justify-center items-center text-[80px] disabled:pointer-events-none ${
							item === "O" ? "text-[#0500FF]" : "text-[#FF0000]"
						} ${index === 0 ? "rounded-tl-[25px]" : ""} ${
							index === 2 ? "rounded-tr-[25px]" : ""
						} ${index === 6 ? "rounded-bl-[25px]" : ""} ${
							index === 8 ? "rounded-br-[25px]" : ""
						}`}
						key={index}
						onClick={() => {
							this.props.handleButton(index);
						}}
						disabled={item || this.props.isGameEnded}
					>
						{item}
					</button>
				))}
			</div>
		);
	}
}
