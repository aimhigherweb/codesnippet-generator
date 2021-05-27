import { Fragment } from "react";

import FAQ from './single';

const FAQCode = ({ data }) => {
	const faqs = data;

	return (
		<Fragment>
			{faqs.map((faq, i) => (
				<FAQ {...faq} key={i} />
			))}
		</Fragment>
	);
};

export default FAQCode;
