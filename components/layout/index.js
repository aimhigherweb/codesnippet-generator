import { Fragment } from 'react';
import Head from 'next/head';

import styles from './layout.module.scss';

const Layout = ({
	children
}) => (
	<Fragment>
		<header>
			<h1>Code Generator</h1>
		</header>
		<main className={styles.main}>
			{children}
		</main>

		<Head>

		</Head>
	</Fragment>
);

export default Layout;
