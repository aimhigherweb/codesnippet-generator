import {
	useState
} from "react";
import Builder from '../../builder';

import FAQ from './edit';

import { addData } from '../../../../utils/data';

import styles from './faqs.module.scss';

const FAQs = ({ type }) => {
	const [faqs, setFaqs] = useState([]);
	const details = {
		type,
		setHook: setFaqs
	};
	const addFaq = () => {
		const newFaqs = [
			...faqs,
			{
				summary: `FAQ Title`,
				content: `FAQ Content`
			}
		];
		addData(newFaqs, type);
		setFaqs(newFaqs);
	};

	return (
		<Builder {...details}>
			<div>
				{faqs.map((faq, i) => (
					<FAQ
						key={i}
						{...{
							...faq,
							data: faqs,
							setData: setFaqs,
							i,
							type
						}}
					/>
				))}
				<button className={styles.add} onClick={() => addFaq()}>Add FAQ</button>
			</div>
		</Builder>
	);
};

export default FAQs;
