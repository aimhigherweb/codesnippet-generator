const container = [
	{
		value: `multi_row`,
		label: `Multi Row`
	},
	{
		label: `Small Images`,
		value: `img_small`
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
			}
		]
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
		value: `image_align`,
		label: `Image Align`,
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
];

module.exports = {
	container,
	tile
};
