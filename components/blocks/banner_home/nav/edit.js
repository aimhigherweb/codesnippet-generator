import {
	useState
} from "react";
import Link from './single';
import Text from '../../../parts/inputs/text';
import TextArea from '../../../parts/inputs/textArea';

import { addData } from '../../../../utils/data';

import Modal from '../../../parts/modal';
import { colours } from '../../../../_data/tileOptions';

import styles from '../banner.module.scss';

const EditNav = ({
	text, link, setData, data, i, type
}) => {
	const [modal, openModal] = useState(false);
	const [textValue, setText] = useState(text);
	const [linkValue, setLink] = useState(link);
	const changeText = (editorContents) => {
		const navs = data;
		navs[i].text = editorContents;
		setText(editorContents);
		setData(navs);
		addData(navs, `${type}_navs`);
	};
	const changeLink = (editorContents) => {
		const navs = data;
		navs[i].link = editorContents;
		setLink(editorContents);
		setData(navs);
		addData(navs, `${type}_navs`);
	};
	const saveChanges = () => {
		addData(data, `${type}_navs`);
		openModal(!modal);
	};

	return (
		<div className={styles.nav}>
			<button
				className={styles.edit}
				onClick={() => openModal(!modal)}
			>
				Edit
			</button>
			<Link {...{ text: textValue, link: linkValue }} />
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
						/>
						<h2>Link</h2>
						<Text
							value={linkValue}
							onBlur={changeLink}
							onChange={changeLink}
							hideToolbar={true}
						/>
					</div>
				</Modal>
			}
		</div>
	);
};

export default EditNav;
