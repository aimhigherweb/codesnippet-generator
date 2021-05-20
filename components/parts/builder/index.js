import { useState, Fragment, useEffect } from "react";

import CodeGenerator from '../codeGenerator';
import PasteCode from '../pasteCode';

import { clearData, getData } from '../../../utils/data';

import styles from './builder.module.scss';

const Builder = ({ type, setHook, children }) => {
	const [modal, openModal] = useState(false);
	const [paste, openPaste] = useState(false);
	const clear = () => {
		setHook([]);
		clearData();
	};

	useEffect(() => {
		setHook(getData);
	}, []);

	return (
		<Fragment>
			<div className={styles.controls}>
				<button onClick={() => clear()}>Clear Data</button>
				<button onClick={() => openModal(!modal)}>Generate Code</button>
				<button onClick={() => openPaste(!paste)}>Paste Code</button>
			</div>
			<div className={styles.content}>
				{children}
			</div>
			{modal && (
				<CodeGenerator
					{...{
						type,
						closeModal: openModal
					}}
				/>
			)}
			{paste && (
				<PasteCode
					{...{
						type,
						closeModal: openPaste,
						setHook
					}}
				/>
			)}
		</Fragment>
	);
};

export default Builder;
