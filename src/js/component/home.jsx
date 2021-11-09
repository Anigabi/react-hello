import React, { Fragment, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import TicTacToe from "./ticTacToe.jsx";

const possibleLines = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

//create your first component
const Home = () => {
	const [turn, setTurn] = useState("👻"); //true =x y False = 0
	const [tikList, setTikList] = useState([
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		""
	]);

	const [ElGanador, setElGanador] = useState("");

	const ChangeTurn = position => {
		let newTicList = [...tikList];

		if (ElGanador == "") {
			if (turn == "👻") {
				setTurn("👽");
				newTicList[position] = "👻";
				setTikList(newTicList);
				winner(newTicList);
			} else {
				setTurn("👻");
				newTicList[position] = "👽";
				setTikList(newTicList);
				winner(newTicList);
			}
		}
	};

	const takList = tikList.map((_, index) => {
		return (
			<TicTacToe
				key={index.toString()}
				position={index}
				value={turn}
				ChangeTurn={ChangeTurn}
			/>
		);
	});

	const winner = newTicList => {
		possibleLines.map(winnerPosition => {
			let a = winnerPosition[0];
			let b = winnerPosition[1];
			let c = winnerPosition[2];

			if (
				newTicList[a] == "👻" &&
				newTicList[b] == "👻" &&
				newTicList[c] == "👻"
			) {
				setElGanador("El Ganador es 👻");
			} else if (
				newTicList[a] == "👽" &&
				newTicList[b] == "👽" &&
				newTicList[c] == "👽"
			) {
				setElGanador("El Ganador es 👽");
			}
		});
	};

	console.log(tikList);

	return (
		<Fragment>
			<Container>
				<h3>TicTacToe With React</h3>

				<h1>{ElGanador}</h1>
				<Row>
					{takList[0]}
					{takList[1]}
					{takList[2]}
				</Row>
				<Row>
					{takList[3]}
					{takList[4]}
					{takList[5]}
				</Row>
				<Row>
					{takList[6]}
					{takList[7]}
					{takList[8]}
				</Row>
			</Container>
			<footer>
				<a href="https://github.com/Anigabi" target="blank">
					👻AniGabi
				</a>
			</footer>
		</Fragment>
	);
};

export default Home;
