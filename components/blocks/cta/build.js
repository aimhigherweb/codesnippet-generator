import {
	useState
} from "react";
import Builder from '../../parts/builder';

import CTA from './edit';

import { addData } from '../../../utils/data';

import styles from './cta.module.scss';

const CTAs = ({ type }) => {
	const [ctas, setCTAs] = useState([]);
	const details = {
		type,
		setHook: setCTAs
	};
	const addCTA = () => {
		const newCTAs = [
			...ctas,
			{
				text: `CTA Button`
			}
		];
		addData(newCTAs, type);
		setCTAs(newCTAs);
	};

	return (
		<Builder {...details}>
			<div className={styles.container}>
				<ul className={`pa_cta`}>
					{ctas.map((cta, i) => (
						<CTA
							key={i}
							{...{
								...cta,
								data: ctas,
								setData: setCTAs,
								i,
								type
							}}
						/>
					))}

				</ul>
				<button className={styles.add} onClick={() => addCTA()}>Add CTA</button>
			</div>
		</Builder>
	);
};

export default CTAs;
