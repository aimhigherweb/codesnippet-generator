import {
	useState, Fragment, useEffect, useMemo
} from "react";
import {
	Editor, EditorState, ContentState, convertFromHTML, convertToRaw
} from 'draft-js';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

import { convertToHTML } from "draft-convert";
import Builder from '../builder';

import Text from '../inputs/text';
import TextArea from '../inputs/textArea';

import { addData } from '../../../utils/data';

import styles from './faq.module.scss';

const FAQs = ({ type }) => {
	const [faqs, setFaqs] = useState([]);
	const details = {
		type,
		setHook: setFaqs
	};
	const addFaq = () => {
		const newFaqs = [
			...faqs,
			{
				summary: `FAQ Title`,
				content: `FAQ Content`
			}
		];
		addData(newFaqs);
		setFaqs(newFaqs);
	};

	return (
		<Builder {...details}>
			<div className={styles.faqs}>
				{faqs.map((faq, i) => (
					<FAQ
						key={i}
						{...{
							...faq,
							i,
							data: faqs,
							setData: setFaqs
						}}
					/>
				))}
				<button onClick={() => addFaq()}>Add FAQ</button>
			</div>
		</Builder>
	);
};

const FAQ = ({
	summary, content, setData, data, i
}) => {
	const [open, setOpen] = useState(true);
	const [summaryValue, setSummary] = useState(summary);
	const [contentValue, setContent] = useState(content);
	const changeSummary = (e, editorContents) => {
		const faqs = data;
		faqs[i].summary = editorContents;
		setData(faqs);
		addData(faqs);
	};
	const changeContent = (e, editorContents) => {
		const faqs = data;
		faqs[i].content = editorContents;
		setData(faqs);
		addData(faqs);
	};

	return (
		<div className={styles.details} open={open}>
			<Text
				className={styles.summary}
				onClick={() => setOpen(!open)}
				value={summaryValue}
				onBlur={changeSummary}
				onChange={setSummary}
			/>
			<TextArea
				className={styles.content}
				value={contentValue}
				onBlur={changeContent}
				onChange={setContent}
			/>
		</div>
	);
};

export default FAQs;
