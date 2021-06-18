import FAQ from '../../blocks/faq/build';
import FlexiTiles from '../../blocks/flexTiles/build';
import CTA from '../../blocks/cta/build';
import CTABlock from '../../blocks/cta_block/build';
import Logos from '../../blocks/logos/build';

const Generator = ({ type }) => {
	let Builder;

	if (type === `faq`) {
		Builder = FAQ;
	} else if (type === `flexi`) {
		Builder = FlexiTiles;
	} else if (type === `cta`) {
		Builder = CTA;
	} else if (type === `cta_block`) {
		Builder = CTABlock;
	} else if (type === `logos`) {
		Builder = Logos;
	}

	return (
		<Builder {...{ type }} />
	);
};

export default Generator;
