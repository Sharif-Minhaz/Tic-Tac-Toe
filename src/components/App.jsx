import React from "react";
import TicTacToe from "./tic-tac-toe/TicTacToe";
import "./app.css";

function App(props) {
	return (
		<div className="app">
			<h1>Tic Tac Toe</h1>
			<TicTacToe />
		</div>
	);
}

export default App;
