import {
	useMemo, useEffect, useState, useRef
} from 'react';
import dynamic from 'next/dynamic'
import "suneditor/dist/css/suneditor.min.css";

import styles from './text.module.scss'
import cleanContent from '../../../../utils/cleanContent';

import {buttonsSimple} from '../../../../_data/editor'

const SunEditor = dynamic(() => import(`suneditor-react`), {
	ssr: false,
});

const Text = ({
	value, onChange, onBlur, changeHook, section, className, ...props
}) => {
	const editor = useRef();
	const getSunEditorInstance = (sunEditor) => {
		editor.current = sunEditor;
	};
	const stripString = (content) => {
		return cleanContent(content).replace(/<p>/g, '').replace(/<\/p>/g, '')
	}

	return (
		<div className={`${styles.editor} ${className}`}>
			<SunEditor
				ref={editor}
				getSunEditorInstance={getSunEditorInstance}
				defaultValue={value}
				onBlur={(e, editorContents) => onBlur(stripString(editorContents), section, changeHook)}
				onChange={(e) => onChange(stripString(e), section, changeHook)}
				setOptions={{
					buttonList: buttonsSimple,
				}}
				{...props}
			/>
		</div>
	);
};

export default Text;
