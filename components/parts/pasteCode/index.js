import { useRef } from "react";

import Modal from '../modal';

import { addData } from '../../../utils/data';
import parse from '../../../utils/parse/faq';

import styles from './pasteCode.module.scss';

const PasteCode = ({ type, setHook, ...modalProps }) => {
	const ref = useRef(null);

	let Code;

	if (type === `faq`) {
		// Code = FAQCode;
	}

	const generateBlocks = () => {
		const code = ref.current.value;
		const el = document.createElement(`div`);

		el.innerHTML = code;

		const data = parse(el);

		setHook(data);
		addData(data);
		modalProps.closeModal(false);
		// console.log(modalProps);
	};

	return (
		<Modal {...modalProps}>
			<button onClick={() => generateBlocks()}>Generate Blocks</button>
			<textarea ref={ref} className={styles.import}></textarea>
		</Modal>
	);
};

export default PasteCode;
