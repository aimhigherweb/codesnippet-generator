const FAQ = ({ summary, content }) => (
	<details>
		<summary
			data-attribute="summary"
			dangerouslySetInnerHTML={{ __html: summary }}
		/>
		<div
			data-attribute="content"
			className="faq_content"
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	</details>
);

export default FAQ;
