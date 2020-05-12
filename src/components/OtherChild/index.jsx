import React from "react";
import { withState } from "components/StateContext";

const OtherChild = ({ state }: OtherChild) => {
	return (
		<>
			<p>Hey, this is the state : {state}</p>
		</>
	);
};

export default withState(OtherChild);
