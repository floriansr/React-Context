import React, { useState, createContext } from "react";

const StateContext = () => {
	const [test, setTest] = useState("test");
	createContext({ test });

	return (
		<>
			<label>
				State :
				<input
					type="text"
					onChange={(e) => setTest(e.target.value)}
					placeholder="Looking for name?"
				/>
			</label>
		</>
	);
};

export const withState = (Component) => (props) => (
	<StateContext.Consumer>
		{(value) => <Component {...props} state={value} />}
	</StateContext.Consumer>
);

export default StateContext;
