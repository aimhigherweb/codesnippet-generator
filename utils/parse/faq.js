const parseFaq = (data) => {
	const faqs = [];

	// console.log(data);

	// console.log(data.children);

	// eslint-disable-next-line no-restricted-syntax
	for (faq of data.children) {
		const summary = faq.querySelector(`[data-attribute='summary']`).innerHTML;
		const content = faq.querySelector(`[data-attribute='content']`).innerHTML;

		faqs.push({
			summary,
			content
		});
	}

	return faqs;
};

export default parseFaq;
