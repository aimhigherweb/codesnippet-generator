import { renderToStaticMarkup } from "react-dom/server";
import { useRef } from "react";
import FAQCode from '../blocks/faq/code';

import Modal from '../modal';

import { getData } from '../../../utils/data';

import styles from './codeGenerator.module.scss';

const CodeGenerator = ({ type, ...modalProps }) => {
	const ref = useRef();
	const data = getData();
	let Code;

	if (type === `faq`) {
		Code = FAQCode;
	}

	const content = renderToStaticMarkup(<Code {...{ data }} />)
		.replace(
			RegExp(process.env.NEXT_PUBLIC_GENERATOR_URL, `g`),
			process.env.NEXT_PUBLIC_WEBSITE_URL
		);

	return (
		<Modal {...modalProps}>
			<div>
				<pre className={styles.code} ref={ref}>
					{content}
				</pre>
			</div>
		</Modal>
	);
};

export default CodeGenerator;
