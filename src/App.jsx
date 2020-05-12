import React, { useState } from "react";

import CounterContext from "components/CounterContext";

import Child from "components/Child";
import OtherChild from "components/OtherChild";

const App = () => {
	const [currentNumber, setCurrentNumber] = useState(0);

	return (
		<CounterContext.Provider
			value={{
				currentNumber,
				increment: () => setCurrentNumber(currentNumber + 1),
				decrement: () => setCurrentNumber(currentNumber - 1),
			}}
		>
			<Child />

			<OtherChild />
		</CounterContext.Provider>
	);
};

export default App;
