import FAQ from '../../blocks/faq/build';
import FlexiTiles from '../../blocks/flexTiles/build';
import CTA from '../../blocks/cta/build';
import CTABlock from '../../blocks/cta_block/build';
import Logos from '../../blocks/logos/build';
import ProductSlider from '../../blocks/slider/build';
import HomeBanner from '../../blocks/banner_home/build';

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
	} else if (type === `slider`) {
		Builder = ProductSlider;
	} else if (type === `banner_home`) {
		Builder = HomeBanner;
	}

	return (
		<Builder {...{ type }} />
	);
};

export default Generator;
