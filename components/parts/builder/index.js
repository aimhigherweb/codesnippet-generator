import { useState, Fragment, useEffect } from "react";

import CodeGenerator from '../codeGenerator';
import PasteCode from '../pasteCode';

import { clearData, getData } from '../../../utils/data';

import styles from './builder.module.scss';

const Builder = ({
	type, setHook, children, setData
}) => {
	const [modal, openModal] = useState(false);
	const [paste, openPaste] = useState(false);
	const clear = () => {
		if (setHook) {
			setHook([]);
		}

		clearData(type);

		if (setData) {
			setData.forEach(({ type: t }) => clearData(t));
		}
	};

	useEffect(() => {
		const data = getData(type);

		if (setHook) {
			setHook(data);
		}

		if (setData) {
			setData.forEach(({ type: t, hook }) => {
				const typeData = getData(t);

				hook(typeData);
			});
		}
	}, []);

	return (
		<Fragment>
			<div className={styles.controls}>
				<button onClick={() => clear(type)}>Clear Data</button>
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
						setHook,
						setData
					}}
				/>
			)}
		</Fragment>
	);
};

export default Builder;
