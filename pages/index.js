import { useRouter } from 'next/router';
import {
	useContext, useEffect, useState, Fragment
} from 'react';

import Layout from '../components/layout';
import Generator from '../components/parts/generator';

import types from '../_data/types';

import styles from './index.module.scss';

const IndexPage = () => {
	const [type, setType] = useState(`faq`);
	const switchType = (codeType) => {
		console.log(`switching type ${codeType}`);
		setType(codeType);

		window.localStorage.setItem(`contentType`, codeType);
	};

	useEffect(() => {
		if (typeof window !== `undefined` && window.localStorage.getItem(`contentType`)) {
			console.log(`setting type ${window.localStorage.getItem(`contentType`)}`);
			setType(window.localStorage.getItem(`contentType`));
		}
	}, []);

	return (
		<Layout>
			<fieldset className={styles.types}>
				<legend>Select Code Type</legend>
				<div className={styles.items}>
					{types.map((opt) => (
						<Fragment key={opt.id}>
							<input
								id={opt.id}
								name="code_type"
								type="radio"
								defaultChecked={opt.id === type}
								onChange={switchType}
							/>
							<label
								htmlFor={opt.id}

							>
								{opt.name}
							</label>
						</Fragment>
					))}
				</div>
			</fieldset>

			<Generator {...{ type }} />
		</Layout>
	);
};

export default IndexPage;
