import { renderToStaticMarkup } from "react-dom/server";
import { useEffect, useRef } from "react";
import FAQ from '../../blocks/faq/code';
import Flexi from '../../blocks/flexTiles/code';
import CTA from '../../blocks/cta/code';
import CTABlock from '../../blocks/cta_block/code';
import Logos from '../../blocks/logos/code';
import ProductSlider from '../../blocks/slider/code';

import Modal from '../modal';

import { getData } from '../../../utils/data';

import styles from './codeGenerator.module.scss';

const CodeGenerator = ({ type, ...modalProps }) => {
	const ref = useRef();
	const data = getData(type);
	let Code;

	if (type === `faq`) {
		Code = FAQ;
	} else if (type === `flexi`) {
		Code = Flexi;
	} else if (type === `cta`) {
		Code = CTA;
	} else if (type === `cta_block`) {
		Code = CTABlock;
	} else if (type === `logos`) {
		Code = Logos;
	} else if (type === `slider`) {
		Code = ProductSlider;
	}

	const content = renderToStaticMarkup(<Code {...{ data }} />)
		.replace(
			RegExp(process.env.NEXT_PUBLIC_GENERATOR_URL, `g`),
			process.env.NEXT_PUBLIC_WEBSITE_URL
		);

	return (
		<Modal {...modalProps}>
			<textarea className={styles.code} ref={ref} defaultValue={content}>
			</textarea>
		</Modal>
	);
};

export default CodeGenerator;
