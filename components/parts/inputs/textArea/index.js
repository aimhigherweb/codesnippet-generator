import {
	useMemo, useEffect, useState, useRef
} from 'react';
import dynamic from 'next/dynamic'

import {buttonsFull, colours, formats, imageOptions, paragraphStyles, textStyles} from '../../../../_data/editor'

import styles from './textArea.module.scss'
import cleanContent from '../../../../utils/cleanContent';

const SunEditor = dynamic(() => import(`suneditor-react`), {
	ssr: false,
});

const TextArea = ({
	value, onChange, changeHook, section, onBlur, options, ...props
}) => {
	const [toolbar, toggleToolbar] = useState(false)
	const editor = useRef();
	const getSunEditorInstance = (sunEditor) => {
		editor.current = sunEditor;
	};
	
	return (
		<div className={styles.editor}>
			{props.hideToolbar && <button className={styles.edit} onClick={() => toggleToolbar(!toolbar)}>Edit</button>}
			<SunEditor
				hideToolbar={!toolbar}
				ref={editor}
				getSunEditorInstance={getSunEditorInstance}
				defaultValue={value}
				onBlur={(e, editorContents) => onBlur(cleanContent(editorContents), section, changeHook)}
				onChange={(e) => onChange(cleanContent(e), section, changeHook)}
				setOptions={{
					buttonList: buttonsFull,
					colorList: colours,
					formats,
					paragraphStyles,
					textStyles,
					...imageOptions,
					...options
				}}
				{...props}
			/>
		</div>
	);
};

export default TextArea;
