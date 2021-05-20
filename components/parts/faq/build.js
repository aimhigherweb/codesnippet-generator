import { useState, Fragment, useEffect } from "react";

import Modal from '../modal';

const FAQ = ({ type }) => {
	const [faqs, setFaqs] = useState([]);
	const [modal, openModal] = useState(false);

	const addFaq = () => {
		const newFaqs = [
			...faqs,
			{
				summary: `FAQ Title`,
				content: `FAQ Content`
			}
		];
		window.localStorage.setItem(`contentData`, JSON.stringify(newFaqs));
		setFaqs(newFaqs);
	};

	useEffect(() => {
		if (window && window.localStorage.getItem(`contentData`)) {
			setFaqs(JSON.parse(window.localStorage.getItem(`contentData`)));
		}
	}, []);

	return (
		<Fragment>
			<div>
				{faqs.map((faq, i) => (
					<details key={i} open={true}>
						<summary contentEditable={true}>{faq.summary}</summary>
						<div contentEditable={true}>
							{faq.content}
						</div>
					</details>
				))}
				<button onClick={() => addFaq()}>Add FAQ</button>
			</div>
			<button onClick={() => openModal(!modal)}>Generate Code</button>
			{modal && <Modal {...{ type }} />}
		</Fragment>
	);
};

export default FAQ;
