import { useState } from 'react';

import Text from '../inputs/text';

import { colours } from '../../../_data/tileOptions';

const CTAFields = ({
	text, link, colour, i, change, ctas, setCTAs
}) => {
	const [textValue, setText] = useState(text);
	const [linkValue, setLink] = useState(link);
	const [colourValue, setColour] = useState(colour);
	const changeText = (editorContents) => {
		const data = ctas;
		data[i].text = editorContents;
		setText(editorContents);
		setCTAs(data);
		change(data, `cta`);
	};
	const changeLink = (editorContents) => {
		const data = ctas;
		data[i].link = editorContents;
		setLink(editorContents);
		setCTAs(data);
		change(data, `cta`);
	};
	const changeColour = (editorContents) => {
		const data = ctas;
		data[i].colour = editorContents;
		setColour(editorContents);
		setCTAs(data);
		change(data, `cta`);
	};

	return (
		<div>
			<h3>Link {i + 1}</h3>
			<h4>Text</h4>
			<Text
				className={` `}
				value={textValue}
				onBlur={changeText}
				onChange={changeText}
				hideToolbar={true}
				placeholder={`Contact Us`}
			/>
			<h4>Link</h4>
			<Text
				className={` `}
				value={linkValue}
				onBlur={changeLink}
				onChange={changeLink}
				hideToolbar={true}
				placeholder={`/contact-us`}
			/>
			<h4>Background Colour</h4>
			<select
				className={` `}
				value={colourValue}
				onChange={(e) => changeColour(e.target.value)}
			>
				{colours.map((opt) => (
					<option
						key={opt.value}
						value={opt.value}
					>
						{opt.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default CTAFields;
