import React, { useState } from "react";
import PropTypes from "prop-types";

const TicTacToe = props => {
	const [value, setValue] = useState("");

	return (
		<div
			className="box"
			onClick={() => {
				if (!value) {
					setValue(props.value);
					props.ChangeTurn(props.position);
				}
			}}>
			{value}
		</div>
	);
};

TicTacToe.propTypes = {
	value: PropTypes.string,
	ChangeTurn: PropTypes.string,
	position: PropTypes.number
};

export default TicTacToe;
