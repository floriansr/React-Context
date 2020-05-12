import React, { createContext } from "react";

const TotoContext = createContext({ name1: "Matthieu", name2: "Mathis" });

export const withToto = (Component) => (props) => (
	<TotoContext.Consumer>
		{(value) => <Component {...props} toto={value} />}
	</TotoContext.Consumer>
);

export default TotoContext;
