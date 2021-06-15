import { Fragment } from "react";

import CTA from './single';

const CTACode = ({ data }) => {
	const ctas = data;

	return (
		<ul className="pa_cta">
			{ctas.map((cta, i) => (
				<CTA {...cta} key={i} />
			))}
		</ul>
	);
};

export default CTACode;
