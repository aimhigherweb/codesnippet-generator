import { useRef } from "react";

import Modal from '../modal';

import { addData } from '../../../utils/data';
import faq from '../../../utils/parse/faq';
import flexiTiles from '../../../utils/parse/tiles';
import cta from '../../../utils/parse/cta';
import logos from '../../../utils/parse/logos';

import styles from './pasteCode.module.scss';

const PasteCode = ({ type, setHook, ...modalProps }) => {
	const ref = useRef(null);
	let parse = false;

	if (type === `faq`) {
		parse = faq;
	} else if (type === `flexi`) {
		parse = flexiTiles;
	} else if (type === `cta`) {
		parse = cta;
	} else if (type === `logos`) {
		parse = logos;
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

	if (!parse) return <p>Something went wrong</p>;

	return (
		<Modal {...modalProps}>
			<button className={styles.generate} onClick={() => generateBlocks()}>Generate Blocks</button>
			<textarea ref={ref} className={styles.import}></textarea>
		</Modal>
	);
};

export default PasteCode;
