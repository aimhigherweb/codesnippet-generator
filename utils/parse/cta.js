const parseCTA = (data) => {
	const ctas = [];

	// eslint-disable-next-line no-restricted-syntax
	for (const cta of data.children[0].children) {
		// console.log(cta);

		const button = cta.querySelector(`a`);

		const text = button.innerHTML;
		const link = button.href;
		const { colour } = button.dataset;

		ctas.push({
			text,
			link,
			colour
		});
	}

	return ctas;
};

export default parseCTA;
