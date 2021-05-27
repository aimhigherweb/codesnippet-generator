import styles from './faq.module.scss';

const FAQ = ({ summary, content }) => (
	<details>
		<summary
			className={styles.summary}
			data-attribute="summary"
			dangerouslySetInnerHTML={{ __html: summary }}
		/>
		<div
			data-attribute="content"
			className={styles.content}
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	</details>
);

export default FAQ;
