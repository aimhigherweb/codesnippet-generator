import { useRouter } from 'next/router';
import {
	useContext, useEffect, useState, Fragment
} from 'react';

import Layout from '../components/layout';
import Generator from '../components/parts/generator';

import types from '../_data/types';

import styles from './index.module.scss';

const IndexPage = () => {
	const defaultType = `faq`;
	const [type, setType] = useState(defaultType);

	return (
		<Layout>
			<fieldset className={styles.types}>
				<legend>Select Code Type</legend>
				<div className={styles.items}>
					{types.map((type) => (
						<Fragment key={type.id}>
							<input
								id={type.id}
								name="code_type"
								type="radio"
								defaultChecked={type.id === defaultType}
								onChange={() => setType(type.id)}
							/>
							<label
								htmlFor={type.id}

							>
								{type.name}
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
