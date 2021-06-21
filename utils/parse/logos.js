const parseLogos = (data) => {
	const logos = [];

	// eslint-disable-next-line no-restricted-syntax
	for (const logo of data.children[0].children) {
		const image = logo.querySelector(`img`).src;
		const link = logo.querySelector(`a`).href;

		logos.push({
			logo: image,
			link
		});
	}

	return logos;
};

export default parseLogos;
