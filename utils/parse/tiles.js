const parseTiles = (data) => {
	const tiles = [];
	const addTile = (details) => {
		if(details && Object.keys(details).length) {
			tiles.push(details);
		}
	}

	let details = {}
	let tile_options = {}
	let flexi_options = {}

	// eslint-disable-next-line no-restricted-syntax
	for (const container of data.children) {
		flexi_options = container.attributes?.['data-options']?.value

		for (const tile of container.children) {

			const heading = tile.querySelector(`[data-attribute='heading']`)?.innerHTML
			const content = tile.querySelector(`[data-attribute='content']`)?.innerHTML
			const image = tile.querySelector(`[data-attribute='content']`)?.src
			const options = tile.querySelector(`[data-attribute='container']`).dataset.options || `{}`
			const links = tile.querySelector(`[data-attribute='ctas']`)
			let ctas = []


			if(links && links.children) {
				console.log(links)
				for (const cta of links.children) {		
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
			}

			tiles.push({
				heading,
				content,
				image,
				cta: ctas,
				options: JSON.parse(options)
			})
		}
	}

	window.localStorage.setItem('flexi_options', flexi_options)

	console.log({flexi_options: JSON.parse(flexi_options), tiles})

	return tiles;
};

export default parseTiles;
