const parseFaq = (data) => {
	const faqs = [];
	// eslint-disable-next-line no-restricted-syntax
	console.log({ data, children: data.children });
	for (faq of data.children) {
		const summary = faq?.querySelector(`[data-attribute='summary']`)?.innerHTML;
		const content = faq?.querySelector(`[data-attribute='content']`)?.innerHTML;

		faqs.push({
			summary,
			content
		});
	}

	return faqs;
};

export default parseFaq;
