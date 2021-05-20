import { renderToStaticMarkup } from "react-dom/server";
import FAQCode from '../faq/code';

import Modal from '../modal';

import { getData } from '../../../utils/data';

import styles from './codeGenerator.module.scss';

const CodeGenerator = ({ type, ...modalProps }) => {
	const data = getData();
	let Code;

	if (type === `faq`) {
		Code = FAQCode;
	}

	return (
		<Modal {...modalProps}>
			<pre className={styles.code}>
				{renderToStaticMarkup(<Code {...{ data }} />)}
			</pre>
		</Modal>
	);
};

export default CodeGenerator;
