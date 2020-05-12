import React from "react";
import { withToto } from "components/TotoContext";

const Child = ({ toto }: Child) => {
	return (
		<>
			<p>Hey, this is the first name : {toto.name1}</p>
			<p>Hey, this is the second name: {toto.name2}</p>
		</>
	);
};

export default withToto(Child);
