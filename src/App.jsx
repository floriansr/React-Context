import React from "react";

// import StateContext from "components/StateContext";

import Child from "components/Child";
import OtherChild from "components/OtherChild";

const App = () => {
	// const [name, setName] = useState("test");

	return (
		<>
			<Child />
			<OtherChild />
		</>
	);
};

export default App;

// <StateContext.Provider state={name}>
// 	<OtherChild />
// </StateContext.Provider>

// <label>
// 	State :
// 	<input
// 		type="text"
// 		onChange={(e) => setName(e.target.value)}
// 		placeholder="Looking for name?"
// 	/>
// </label>
