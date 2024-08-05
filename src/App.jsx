import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
	decrement,
	increment,
	multiply,
	multiplyBy,
	reset,
} from "./redux/counter/CounterSlice";

function App() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<>
			<Navbar />

			<h1>Vite + React</h1>
			<div className="card">
				<button
					onClick={() => {
						dispatch(increment());
					}}
				>
					+
				</button>
				<div> count is {count}</div>
				<button
					onClick={() => {
						dispatch(decrement());
					}}
				>
					-{" "}
				</button>
			</div>
			<p className="read-the-docs">
				<button
					onClick={() => {
						dispatch(reset());
					}}
				>
					{" "}
					reset
				</button>
			</p>
			<p className="read-the-docs">
				<button
					onClick={() => {
						dispatch(multiplyBy(6));
					}}
				>
					{" "}
					multiply by 6
				</button>
			</p>
			<p className="read-the-docs">
				<button
					onClick={() => {
						dispatch(multiply());
					}}
				>
					{" "}
					multiply by 2
				</button>
			</p>
		</>
	);
}

export default App;
