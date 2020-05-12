import React from "react";
import CounterContext from "components/CounterContext";

const OtherChild = () => {
	return (
		<CounterContext.Consumer>
			{(value) => (
				<>
					<p>Hey, this is the state : {value.currentNumber}</p>
					<button type="button" onClick={value.decrement}>
						-
					</button>
					<button type="button" onClick={value.increment}>
						+
					</button>
				</>
			)}
		</CounterContext.Consumer>
	);
};

export default OtherChild;
