const cleanContent = (content) => content.replace(/<br>/g, ``).replace(RegExp(`<p></p>`, `g`), ``);

module.exports = cleanContent;
