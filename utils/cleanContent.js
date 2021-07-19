const cleanContent = (content) => content
	.replace(/<br>/g, ``)
	.replace(RegExp(`<p></p>`, `g`), ``)
	.replace(/style="(\w|\d|:|;|'|\s|-|_|\(|\)|,|\.|!)*"/gi, ``)
	.replace(/style=\\"(\w|\d|:|;|'|\s|-|_|\(|\)|,|\.|!)*\\"/gi, ``);

module.exports = cleanContent;
