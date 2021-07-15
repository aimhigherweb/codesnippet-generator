const buttonsFull = [[
	`undo`,
	`redo`,
	`formatBlock`,
	'textStyle',
	`bold`,
	`underline`,
	`italic`,
	`fontColor`,
	`horizontalRule`,
	`list`,
	`link`,
	`image`,
	
]];

const buttonsSimple = [[
	`bold`,
	`italic`,
	'textStyle'
]];

const colours = [
	[
		`#0093c9`,
		`#172f57`,
		`#42beee`,
		`#000000`,
		`#ffffff`,
		`#d1d3d4`,
		`#414042`,
		`#6d6e71`
	],
];

const formats = [
	`p`,
	`h2`,
	`h3`,
	`h4`,
	{
		tag: `p`,
		name: `Leading Paragraph`,
		command: `free`,
		class: `__se__format__free_pa_lead`
	},
	{
		tag: `span`,
		name: `Uppercase`,
		command: `free`,
		class: `__se__format__free_pa_uppercase`
	}
];

const textStyles = [
	{
		name: 'Uppercase',
		class: '__se__pa_uppercase',
		tag: 'span'
	},
	{
		name: 'Callout Heading',
		class: '__se__pa_callout_heading',
		tag: 'span'
	}
]

const paragraphStyles = [];

const imageOptions = {
	imageFileInput: false,
	imageResizing: false,
	imageHeightShow: false
};

module.exports = {
	buttonsFull,
	colours,
	formats,
	imageOptions,
	paragraphStyles,
	buttonsSimple,
	textStyles
};
