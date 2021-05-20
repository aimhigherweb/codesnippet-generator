import { useState, Fragment, useEffect } from "react";

import Builder from '../builder';

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
	const changeSummary = (newSummary) => {
		const faqs = data;

		faqs[i].summary = newSummary?.target?.innerHTML;

		setData(faqs);
		addData(faqs);
	};

	return (
		<div className={styles.details} open={open}>
			<div
				className={styles.summary}
				contentEditable={true}
				onClick={() => setOpen(!open)}
				onBlur={(e) => { changeSummary(e); }}
				dangerouslySetInnerHTML={{ __html: summary }}
			/>
			<div
				className={styles.content}
				contentEditable={true}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
};

export default FAQs;
