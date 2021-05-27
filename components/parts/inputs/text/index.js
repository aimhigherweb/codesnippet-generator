import {
	useMemo, useEffect, useState, useRef
} from 'react';
import dynamic from 'next/dynamic'
import "suneditor/dist/css/suneditor.min.css";

import styles from './text.module.scss'

const SunEditor = dynamic(() => import(`suneditor-react`), {
	ssr: false,
});

const Text = ({
	value, onChange, onBlur, className, ...props
}) => {
	const [toolbar, toggleToolbar] = useState(false)
	const editor = useRef();
	const getSunEditorInstance = (sunEditor) => {
		editor.current = sunEditor;
	};

	return (
		<div className={`${styles.editor} ${className}`}>
			<button className={styles.edit} onClick={() => toggleToolbar(!toolbar)}>Edit</button>
			<SunEditor
				hideToolbar={!toolbar}
				ref={editor}
				getSunEditorInstance={getSunEditorInstance}
				defaultValue={value}
				onBlur={onBlur}
				onChange={(e, editorContents) => onChange(editorContents)}
				setOptions={{
					buttonList: [[
						"bold",
						"italic",
					]],
					formats: ["p", "h1", "h2", "h3", "h4"],
				}}
				{...props}
			/>
		</div>
	);
};

export default Text;
