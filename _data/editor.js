const buttonsFull = [[
	`undo`,
	`redo`,
	`formatBlock`,
	`bold`,
	`underline`,
	`italic`,
	`fontColor`,
	`horizontalRule`,
	`list`,
	`link`,
	`image`
]];

const buttonsSimple = [[
	`bold`,
	`italic`,
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
	}
];

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
	buttonsSimple
};
