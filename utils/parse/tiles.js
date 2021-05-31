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
			const attribute = tile?.attributes?.[`data-attribute`]?.value

			console.log({tile, details})

		if (details[attribute]) {
			addTile(details)

			details = {}
		}

		if (attribute === 'image') {
			details.image = {
				url: tile.src
			};
		}
		else if(attribute === 'container') {
			addTile(details)

			details = {}

			details.options = tile.attributes?.['data-options']?.value && JSON.parse(tile.attributes['data-options'].value)

			details.heading = tile.querySelector(`[data-attribute='heading']`)?.innerHTML
			details.content = tile.querySelector(`[data-attribute='content']`)?.innerHTML
		}
		 else {
			details[attribute] = tile.innerHTML
		}
		}
	}

	addTile(details)

	window.localStorage.setItem('flexi_options', flexi_options)

	console.log(tiles)

	return tiles;
};

export default parseTiles;
