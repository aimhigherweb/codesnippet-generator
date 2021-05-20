import { Fragment } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import FAQ from '../faq/build';

const Generator = ({ type }) => {
	let Builder;

	if (type === `faq`) {
		Builder = FAQ;
	}

	return (
		<Builder {...{ type }} />
	);
};

export default Generator;
