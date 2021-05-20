import { useRouter } from 'next/router';
import {
	useContext, useEffect, useState, Fragment
} from 'react';

import Layout from '../components/layout';

import Generator from '../components/parts/generator';

import types from '../_data/types';

const IndexPage = () => {
	const defaultType = `faq`;
	const [type, setType] = useState(defaultType);
	return (
		<Layout>
			<fieldset>
				<legend>Select Code Type</legend>
				<div>
					{types.map((type) => (
						<Fragment key={type.id}>
							<input
								id={type.id}
								name="code_type"
								type="radio"
								defaultChecked={type.id === defaultType}
							/>
							<label
								htmlFor={type.id}
								onChange={() => setType(type.id)}
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
