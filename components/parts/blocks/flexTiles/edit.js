import {
	useState
} from "react";
import Tile from './single';
import Text from '../../inputs/text';
import TextArea from '../../inputs/textArea';

import { addData } from '../../../../utils/data';

import Modal from '../../modal';

import styles from './tiles.module.scss';

const EditFAQ = ({
	heading, content, setData, data, i, type
}) => {
	const [modal, openModal] = useState(false);
	const [headingValue, setHeading] = useState(heading);
	const [contentValue, setContent] = useState(content);
	const changeHeading = (e, editorContents) => {
		const tiles = data;
		tiles[i].summary = editorContents;
		setData(tiles);
		addData(tiles, type);
	};
	const changeContent = (e, editorContents) => {
		const tiles = data;
		tiles[i].content = editorContents;
		setData(tiles);
		addData(tiles, type);
	};

	return (
		<div className={styles.tile}>
			<button
				className={styles.edit}
				onClick={() => openModal(!modal)}
			>
					Edit
			</button>
			<Tile {...{ heading: headingValue, content: contentValue }} />
			{modal
				&& <Modal closeModal={openModal}>
					<div className={`${styles.wrapper}`}>
						<Text
							className={`${styles.heading} `}
							value={headingValue}
							onBlur={changeHeading}
							onChange={setHeading}
							hideToolbar={false}
						/>
						<TextArea
							className={`${styles.content} faq_content`}
							value={contentValue}
							onBlur={changeContent}
							onChange={setContent}
							hideToolbar={false}
						/>
					</div>
				</Modal>
			}
		</div>
	);
};

export default EditFAQ;
