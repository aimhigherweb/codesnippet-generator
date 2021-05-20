import { useState, Fragment } from "react";

const FAQ = ({ data }) => {
	const faqs = data;

	return (
		<Fragment>
			{faqs.map((faq, i) => (
				<details key={i}>
					<summary>{faq.summary}</summary>
					<div>
						{faq.content}
					</div>
				</details>
			))}
		</Fragment>
	);
};

export default FAQ;
