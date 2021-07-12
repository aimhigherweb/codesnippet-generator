const colours = [
	{
		value: `blue_light`,
		label: `Light Blue`
	},
	{
		value: `blue_dark`,
		label: `Dark Blue`
	},
	{
		value: `grey_dark`,
		label: `Dark Grey`
	},
	{
		value: `grey_medium`,
		label: `Medium Grey`
	},
	{
		value: `grey_light`,
		label: `Light Grey`
	},
	{
		value: `gold`,
		label: `Gold`
	},
	{
		value: `white`,
		label: `White`
	}
];

const container = [
	{
		value: `multi_row`,
		label: `Multi Row`
	},
	{
		label: `Small Images`,
		value: `img_small`
	},
	{
		label: `Small Tiles`,
		value: `tile_small`
	},
	{
		label: `Columns`,
		value: `col`,
		opts: [
			{
				value: 1,
				label: `1`
			},
			{
				value: 2,
				label: `2`
			},
			{
				value: 3,
				label: `3`
			},
			{
				value: 4,
				label: `4`
			}
		]
	},
	{
		label: 'Grey Background',
		value: 'bg_grey'
	}
];

const tile = [
	{
		value: `text_align`,
		label: `Content Align`,
		opts: [
			{
				value: `left`,
				label: `Left`
			},
			{
				value: `right`,
				label: `Right`
			},
			{
				value: `centre`,
				label: `Centre`
			}
		]
	},
	{
		value: `link`,
		label: `Tile Link`
	},
	{
		value: `cta`,
		label: `Call to Action`
	},
	{
		value: `image`,
		label: `Image`
	},
	{
		value: `image_position`,
		label: `Image Position`,
		opts: [
			{
				value: `left`,
				label: `Left`
			},
			{
				value: `right`,
				label: `Right`
			}
		]
	},
	{
		label: `Small Images`,
		value: `img_small`
	},
	{
		value: `background`,
		label: `Background Colour`,
		opts: colours
	},
	{
		value: `width`,
		label: `Tile Width`,
		opts: [
			{
				value: `full`,
				label: `Full Width`
			},
			{
				value: `half`,
				label: `1/2`
			},
			{
				value: `third`,
				label: `1/3`
			},
			{
				value: `twothird`,
				label: `2/3`
			},
			{
				value: `quarter`,
				label: `1/4`
			},
			{
				value: `threequarter`,
				label: `3/4`
			},
		]
	}
];

module.exports = {
	container,
	tile,
	colours
};
