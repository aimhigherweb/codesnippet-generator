import {
	useState
} from "react";
import Logo from './single';
import Text from '../../parts/inputs/text';
import TextArea from '../../parts/inputs/textArea';

import { addData } from '../../../utils/data';

import Modal from '../../parts/modal';
import { colours } from '../../../_data/tileOptions';

import styles from './logo.module.scss';
import DeleteButton from "../../parts/delete";

const EditLogo = ({
	logo, link, setData, data, i, type
}) => {
	const [modal, openModal] = useState(false);
	const [logoValue, setLogo] = useState(logo);
	const [linkValue, setLink] = useState(link);
	const changeLogo = (editorContents) => {
		const logos = data;
		logos[i].logo = editorContents;
		setLogo(editorContents);
		setData(logos);
		addData(logos, type);
	};
	const changeLink = (editorContents) => {
		const logos = data;
		logos[i].link = editorContents;
		setLink(editorContents);
		setData(logos);
		addData(logos, type);
	};
	const saveChanges = () => {
		addData(data, type);
		openModal(!modal);
	};
	const deleteLogo = (j) => {
		const logos = data;

		logos.splice(j, 1);

		setData(logos);
		addData(logos, type);
		openModal(!modal);
	};

	return (
		<div className={styles.logo}>
			<button
				className={styles.edit}
				onClick={() => openModal(!modal)}
			>
				Edit
			</button>
			<Logo {...{ logo: logoValue, link: linkValue }} />
			{modal
				&& <Modal closeModal={openModal}>
					<button className={styles.save} onClick={() => saveChanges()}>Save Changes</button>
					<div className={styles.fields}>
						<h2>Logo</h2>
						<Text
							value={logoValue}
							onBlur={changeLogo}
							onChange={changeLogo}
							hideToolbar={true}
							placeholder={`https://pacificautomation.com.au/content/files/images/Pacific%20Automation_rgb_no%20whitespace_web.png`}
						/>
						<h2>Link</h2>
						<Text
							value={linkValue}
							onBlur={changeLink}
							onChange={changeLink}
							hideToolbar={true}
							placeholder={`https://pacificautomation.com.au/`}
						/>
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

export default EditLogo;
