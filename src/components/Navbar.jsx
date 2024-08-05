import React from "react";

// store
import { useSelector, useDispatch } from "react-redux";

export const Navbar = () => {
	const count = useSelector((state) => state.counter.value);

	return <div>Navbar count is {count}</div>;
};
