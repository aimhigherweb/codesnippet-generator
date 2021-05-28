import {
	useMemo, useEffect, useState, useRef
} from 'react';
import dynamic from 'next/dynamic'

import {buttonsFull, colours, formats, imageOptions} from '../../../../_data/editor'

import styles from './textArea.module.scss'

const SunEditor = dynamic(() => import(`suneditor-react`), {
	ssr: false,
});

const TextArea = ({
	value, onChange, onBlur, ...props
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
				onBlur={onBlur}
				onChange={(e) => onChange(e)}
				setOptions={{
					buttonList: buttonsFull,
					colorList: colours,
					formats: formats,
					...imageOptions
				}}
				{...props}
			/>
		</div>
	);
};

export default TextArea;
