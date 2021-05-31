import { useRef } from "react";

import Modal from '../modal';

import { addData } from '../../../utils/data';
import parseFaq from '../../../utils/parse/faq';
import parseTiles from '../../../utils/parse/tiles';

import styles from './pasteCode.module.scss';

const PasteCode = ({ type, setHook, ...modalProps }) => {
	const ref = useRef(null);
	let parse = parseFaq;

	if (type == `flexi`) {
		parse = parseTiles;
	}

	const generateBlocks = () => {
		const code = ref.current.value;
		const el = document.createElement(`div`);

		el.innerHTML = code;

		const data = parse(el);

		setHook(data);
		addData(data, type);
		modalProps.closeModal(false);
	};

	return (
		<Modal {...modalProps}>
			<button onClick={() => generateBlocks()}>Generate Blocks</button>
			<textarea ref={ref} className={styles.import}></textarea>
		</Modal>
	);
};

export default PasteCode;
