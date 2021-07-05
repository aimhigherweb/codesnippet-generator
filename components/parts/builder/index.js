import { useState, Fragment, useEffect } from "react";
import { useRouter } from 'next/router';

import CodeGenerator from '../codeGenerator';
import PasteCode from '../pasteCode';

import { clearData, getData } from '../../../utils/data';

import styles from './builder.module.scss';

const Builder = ({
	type, setHook, children, setData
}) => {
	const router = useRouter();
	const [modal, openModal] = useState(false);
	const [paste, openPaste] = useState(false);
	const clear = () => {
		const confirm = window.confirm(`Are you sure you want to clear this data?`);

		if (!confirm) return;

		if (setHook) {
			setHook([]);
		}

		clearData(type);

		if (setData) {
			setData.forEach(({ type: t }) => clearData(t));
		}

		router.reload(window.location.pathname);
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
