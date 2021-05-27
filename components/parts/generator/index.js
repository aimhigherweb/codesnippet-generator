import FAQ from '../blocks/faq/build';
import FlexiTiles from '../blocks/flexTiles/build';

const Generator = ({ type }) => {
	let Builder;

	if (type === `faq`) {
		Builder = FAQ;
	} else if (type === `flexi`) {
		Builder = FlexiTiles;
	}

	return (
		<Builder {...{ type }} />
	);
};

export default Generator;
