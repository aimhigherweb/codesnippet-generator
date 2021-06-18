import {
	useState
} from "react";
import CTA from './single';
import Text from '../../parts/inputs/text';
import TextArea from '../../parts/inputs/textArea';

import { addData } from '../../../utils/data';

import Modal from '../../parts/modal';
import { colours } from '../../../_data/tileOptions';

import styles from './cta.module.scss';

const EditCTA = ({
	cta, colour, content, setData, data, i, type
}) => {
	const [modal, openModal] = useState(false);
	const [textValue, setText] = useState(cta.text);
	const [linkValue, setLink] = useState(cta.link);
	const [colourValue, setColour] = useState(colour);
	const [buttonColourValue, setButtonColour] = useState(cta.colour);
	const [contentValue, setContent] = useState(content);
	const changeText = (editorContents) => {
		const details = data;
		details.cta.text = editorContents;
		setText(editorContents);
		setData(details);
		addData(details, type);
	};
	const changeLink = (editorContents) => {
		const details = data;
		details.cta.link = editorContents;
		setLink(editorContents);
		setData(details);
		addData(details, type);
	};
	const changeColour = (editorContents) => {
		const details = data;
		details.colour = editorContents;
		setColour(editorContents);
		setData(details);
		addData(details, type);
	};
	const changeButtonColour = (editorContents) => {
		const details = data;
		details.cta.colour = editorContents;
		setButtonColour(editorContents);
		setData(details);
		addData(details, type);
	};
	const changeContent = (editorContents) => {
		const details = data;
		details.content = editorContents;
		setContent(editorContents);
		setData(details);
		addData(details, type);
	};
	const saveChanges = () => {
		addData(data, type);
		openModal(!modal);
	};

	return (
		<div className={styles.cta}>
			<button
				className={styles.edit}
				onClick={() => openModal(!modal)}
			>
				Edit
			</button>
			<CTA {...{
				cta: {
					text: textValue,
					link: linkValue,
					colour: buttonColourValue
				},
				colour: colourValue,
				content: contentValue
			}} />
			{modal
				&& <Modal closeModal={openModal}>
					<button className={styles.save} onClick={() => saveChanges()}>Save Changes</button>
					<div className={styles.fields}>
						<h2>Content</h2>
						<Text
							value={contentValue}
							onBlur={changeContent}
							onChange={changeContent}
							hideToolbar={true}
							placeholder={`Call to Action Statement`}
						/>
						<h2>Background Colour</h2>
						<select
							defaultValue={colourValue}
							onChange={(e) => changeColour(e.target.value)}
							name="background-color"
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
						<h2>Button Text</h2>
						<Text
							value={textValue}
							onBlur={changeText}
							onChange={changeText}
							hideToolbar={true}
							placeholder={`Contact Us`}
						/>
						<h2>Link</h2>
						<Text
							value={linkValue}
							onBlur={changeLink}
							onChange={changeLink}
							hideToolbar={true}
							placeholder={`/contact-us`}
						/>
						<h2>Button Colour</h2>
						<select
							defaultValue={buttonColourValue}
							onChange={(e) => changeButtonColour(e.target.value)}
							name="button-colour"
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
				</Modal>
			}
		</div>
	);
};

export default EditCTA;
