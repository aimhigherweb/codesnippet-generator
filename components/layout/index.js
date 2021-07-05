import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

import styles from './layout.module.scss';

const Layout = ({
	children
}) => {
	useEffect(() => {
		if (typeof window !== `undefined`) {
			LogRocket.init(`6g1epu/pa-code-generator`);
			// plugins should also only be initialized when in the browser
			setupLogRocketReact(LogRocket);
		}
	}, []);

	return (
		<Fragment>
			<header className={styles.header}>
				<h1>Code Generator</h1>
			</header>
			<main className={styles.main}>
				{children}
			</main>

			<Head>

			</Head>
		</Fragment>
	);
};

export default Layout;
