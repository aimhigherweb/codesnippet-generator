import {
	useState
} from "react";
import Builder from '../../parts/builder';

import Logo from './edit';

import { addData } from '../../../utils/data';

import styles from './logo.module.scss';

const Logos = ({ type }) => {
	const [logos, setLogos] = useState([]);
	const details = {
		type,
		setHook: setLogos
	};
	const addLogo = () => {
		const newLogos = [
			...logos,
			{
				logo: `https://pacificautomation.com.au/content/files/images/Pacific%20Automation_rgb_no%20whitespace_web.png`
			}
		];
		addData(newLogos, type);
		setLogos(newLogos);
	};

	return (
		<Builder {...details}>
			<div className={styles.container}>
				<ul className={`pa_logos`}>
					{logos.map((logo, i) => (
						<Logo
							key={i}
							{...{
								...logo,
								data: logos,
								setData: setLogos,
								i,
								type
							}}
						/>
					))}

				</ul>
				<button className={styles.add} onClick={() => addLogo()}>Add Logo</button>
			</div>
		</Builder>
	);
};

export default Logos;
