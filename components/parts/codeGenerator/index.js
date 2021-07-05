import { renderToStaticMarkup } from "react-dom/server";
import { useEffect, useRef } from "react";
import FAQ from '../../blocks/faq/code';
import Flexi from '../../blocks/flexTiles/code';
import CTA from '../../blocks/cta/code';
import CTABlock from '../../blocks/cta_block/code';
import Logos from '../../blocks/logos/code';
import ProductSlider, { ProductSliderCodeScript } from '../../blocks/slider/code';
import HomeBanner, { BannerCodeScript } from '../../blocks/banner_home/code';

import Modal from '../modal';

import { getData } from '../../../utils/data';

import styles from './codeGenerator.module.scss';

const CodeGenerator = ({ type, ...modalProps }) => {
	const ref = useRef();
	const data = getData(type);
	let Code,
	 Script;
	let script = ``;

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
		Script = ProductSliderCodeScript;
	} else if (type === `banner_home`) {
		Code = HomeBanner;
		Script = BannerCodeScript;
	}

	const content = renderToStaticMarkup(<Code {...{ data }} />)
		.replace(
			RegExp(process.env.NEXT_PUBLIC_GENERATOR_URL, `g`),
			process.env.NEXT_PUBLIC_WEBSITE_URL
		);

	console.log({ Script, script });

	if (Script) {
		script = renderToStaticMarkup(<Script {...{ data }} />)
			.replace(
				RegExp(process.env.NEXT_PUBLIC_GENERATOR_URL, `g`),
				process.env.NEXT_PUBLIC_WEBSITE_URL
			)
			.replace(/&#x27;/g, `'`)
			.replace(/&gt;/g, `>`)
			.replace(/&lt;/g, `<`)
			.replace(/&quot;/g, `"`)
			.replace(/&amp;/g, `&`);
	}

	console.log({ Script, script });

	return (
		<Modal {...modalProps}>
			<textarea className={styles.code} ref={ref} defaultValue={`${content}${script}`}>
			</textarea>
		</Modal>
	);
};

export default CodeGenerator;
