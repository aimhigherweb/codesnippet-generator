import {
	useState
} from "react";
import CTA from './single';
import Text from '../../parts/inputs/text';
import TextArea from '../../parts/inputs/textArea';
import DeleteButton from '../../parts/delete';

import { addData } from '../../../utils/data';

import Modal from '../../parts/modal';
import { colours } from '../../../_data/tileOptions';

import styles from './cta.module.scss';

const EditCTA = ({
	text, link, colour, setData, data, i, type
}) => {
	const [modal, openModal] = useState(false);
	const [textValue, setText] = useState(text);
	const [linkValue, setLink] = useState(link);
	const [colourValue, setColour] = useState(colour);
	const changeText = (editorContents) => {
		const ctas = data;
		ctas[i].text = editorContents;
		setText(editorContents);
		setData(ctas);
		addData(ctas, type);
	};
	const changeLink = (editorContents) => {
		const ctas = data;
		ctas[i].link = editorContents;
		setLink(editorContents);
		setData(ctas);
		addData(ctas, type);
	};
	const changeColour = (editorContents) => {
		const ctas = data;
		ctas[i].colour = editorContents;
		setColour(editorContents);
		setData(ctas);
		addData(ctas, type);
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

			<CTA {...{ text: textValue, link: linkValue, colour: colourValue }} />
			{modal
				&& <Modal closeModal={openModal}>
					<button className={styles.save} onClick={() => saveChanges()}>Save Changes</button>

					<div className={styles.fields}>
						<h2>Text</h2>
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
						<h2>Background Colour</h2>
						<select
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
						<DeleteButton
							{...{
								data,
								i,
								type,
								openModal,
								modal
							}}
						/>
					</div>
				</Modal>
			}
		</div>
	);
};

export default EditCTA;
