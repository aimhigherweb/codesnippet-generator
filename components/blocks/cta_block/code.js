import { Fragment } from "react";

import CTA from './single';

const CTACode = ({ data }) => {
	console.log(data);
	return (
		<CTA {...data} />
	);
};

export default CTACode;
