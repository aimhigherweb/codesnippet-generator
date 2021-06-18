import {
	useState, useEffect
} from "react";
import Builder from '../../parts/builder';

import CTA from './edit';

import { getData, addData } from '../../../utils/data';

import styles from './cta.module.scss';

const CTAs = ({ type }) => {
	const [data, setData] = useState({});
	const details = {
		type,
	};

	useEffect(() => {
		const savedData = getData(type);

		if (savedData && savedData.cta) {
			console.log(`savedData setting`, savedData);
			setData(savedData);
		} else {
			const defaultData = {
				cta: {
					text: `Click Here`,
					colour: `blue_light`
				},
				colour: `blue_dark`,
				content: `Call to Action Statement`
			};
			console.log(`no data`, defaultData);
			setData(defaultData);
			addData(defaultData, type);
		}
	}, []);

	if (!data?.cta) return <div></div>;

	return (
		<Builder {...details}>
			<div className={styles.container}>
				<CTA
					{...{
						...data,
						data,
						setData,
						type
					}}
				/>
			</div>
		</Builder>
	);
};

export default CTAs;
