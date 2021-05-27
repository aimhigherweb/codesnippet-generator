import {
	useMemo, useEffect, useState, useRef
} from 'react';
import dynamic from 'next/dynamic'

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
					"undo", 
					"redo", 
					"formatBlock", 
					"bold",
					"underline",
					"italic",
					"fontColor", 
					"horizontalRule", 
					"list", 
					"link", 
					"image"
				]],
				colorList: [
					[
						'#0093c9', 
						'#172f57', 
						'#42beee', 
						'#000000', 
						'#ffffff', 
						'#d1d3d4', 
						`#414042`, 
						'#6d6e71'
					],
				],
				formats: ["p", "h2", "h3", "h4"],
			  }}
			{...props}
		/>
		</div>
	);
};

export default TextArea;
