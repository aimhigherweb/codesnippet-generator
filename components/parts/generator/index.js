import FAQ from '../blocks/faq/build';
import FlexiTiles from '../blocks/flexTiles/build';
import CTA from '../blocks/cta/build';

const Generator = ({ type }) => {
	let Builder;

	if (type === `faq`) {
		Builder = FAQ;
	} else if (type === `flexi`) {
		Builder = FlexiTiles;
	} else if (type === `cta`) {
		Builder = CTA;
	}

	return (
		<Builder {...{ type }} />
	);
};

export default Generator;
