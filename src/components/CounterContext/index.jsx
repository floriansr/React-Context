import React, { createContext } from "react";

const CounterContext = createContext("");

export const withCounter = (Component) => (props) => (
	<CounterContext.Consumer>
		{(state) => <Component {...props} state={state} />}
	</CounterContext.Consumer>
);

export default CounterContext;
