import { useRef } from "react";

import Modal from '../modal';

import { addData } from '../../../utils/data';
import parse from '../../../utils/parse/faq';

import styles from './pasteCode.module.scss';

const PasteCode = ({ type, setHook, ...modalProps }) => {
	const ref = useRef(null);

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
