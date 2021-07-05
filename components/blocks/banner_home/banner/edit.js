import {
	useState
} from "react";
import Banner from './single';
import Text from '../../../parts/inputs/text';
import TextArea from '../../../parts/inputs/textArea';

import { addData } from '../../../../utils/data';

import Modal from '../../../parts/modal';
import { colours } from '../../../../_data/tileOptions';

import styles from '../banner.module.scss';
import DeleteButton from "../../../parts/delete";

const EditBanner = ({
	image, link, setData, data, i, type
}) => {
	const [modal, openModal] = useState(false);
	const [imageValue, setImage] = useState(image);
	const [linkValue, setLink] = useState(link);
	const changeImage = (editorContents) => {
		const banners = data;
		banners[i].image = editorContents;
		setImage(editorContents);
		setData(banners);
		addData(banners, `${type}_banners`);
	};
	const changeLink = (editorContents) => {
		const banners = data;
		banners[i].link = editorContents;
		setLink(editorContents);
		setData(banners);
		addData(banners, `${type}_banners`);
	};
	const saveChanges = () => {
		addData(data, `${type}_banners`);
		openModal(!modal);
	};

	return (
		<div className={styles.banner}>
			<button
				className={styles.edit}
				onClick={() => openModal(!modal)}
			>
				Edit
			</button>
			<Banner {...{ image: imageValue, link: linkValue, i }} />
			{modal
				&& <Modal closeModal={openModal}>
					<button className={styles.save} onClick={() => saveChanges()}>Save Changes</button>
					<div className={styles.fields}>
						<h2>Banner Image</h2>
						<Text
							value={imageValue}
							onBlur={changeImage}
							onChange={changeImage}
							hideToolbar={true}
						/>
						<h2>Link</h2>
						<Text
							value={linkValue}
							onBlur={changeLink}
							onChange={changeLink}
							hideToolbar={true}
						/>
						<DeleteButton
							{...{
								data,
								i,
								type: `${type}_banners`,
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

export default EditBanner;
