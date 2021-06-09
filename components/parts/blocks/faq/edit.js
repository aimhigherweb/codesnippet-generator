import {
	useState
} from "react";
import FAQ from './single';
import Text from '../../inputs/text';
import TextArea from '../../inputs/textArea';

import { addData } from '../../../../utils/data';

import Modal from '../../modal';

import styles from './faqs.module.scss';

const EditFAQ = ({
	summary, content, setData, data, i, type
}) => {
	const [modal, openModal] = useState(false);
	const [summaryValue, setSummary] = useState(summary);
	const [contentValue, setContent] = useState(content);
	const changeSummary = (e, editorContents) => {
		const faqs = data;
		faqs[i].summary = editorContents;
		setData(faqs);
		addData(faqs, type);
	};
	const changeContent = (e, editorContents) => {
		const faqs = data;
		faqs[i].content = editorContents;
		setData(faqs);
	};
	const saveChanges = () => {
		addData(data, type);
		openModal(!modal);
	};

	return (
		<div className={styles.faqs}>
			<button
				className={styles.edit}
				onClick={() => openModal(!modal)}
			>
					Edit
			</button>
			<FAQ {...{ summary: summaryValue, content: contentValue }} />
			{modal
				&& <Modal closeModal={openModal}>
					<button className={styles.save} onClick={() => saveChanges()}>Save Changes</button>
					<div className={`${styles.details} faq_details`}>
						<Text
							className={`${styles.summary} faq_summary`}
							value={summaryValue}
							onBlur={changeSummary}
							onChange={setSummary}
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