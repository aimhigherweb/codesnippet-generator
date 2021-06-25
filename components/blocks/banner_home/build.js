import {
	useState, useEffect
} from "react";
import Builder from '../../parts/builder';

import Banner from './banner/edit';
import Link from './nav/edit';

import { addData, getData } from '../../../utils/data';

import styles from './banner.module.scss';

const Banners = ({ type }) => {
	const [banners, setBanners] = useState([]);
	const [navs, setNavs] = useState([]);
	const details = {
		type,
		clearTypes: [
			type,
			`banner_home_banners`,
			`banner_home_navs`
		],
		setData: [
			{
				hook: setBanners,
				type: `banner_home_banners`
			},
			{
				hook: setNavs,
				type: `banner_home_navs`
			}
		]
	};
	const addBanner = () => {
		const newBanners = [
			...banners,
			{
				image: `https://pacificautomation.com.au/content/files/images/HOMEPAGE/banner_lumel.jpg`
			}
		];
		addData(newBanners, `banner_home_banners`);
		setBanners(newBanners);
	};
	const addNav = () => {
		const newNavs = [
			...navs,
			{
				text: `Nav Item`
			}
		];
		addData(newNavs, `banner_home_navs`);
		setNavs(newNavs);
	};

	return (
		<Builder {...details}>
			<div className={styles.container}>
				<div className={styles.banners}>
					<ul className="pa_banner_home">
						{banners.map((banner, i) => (
							<Banner
								key={i}
								{...{
									...banner,
									data: banners,
									setData: setBanners,
									i,
									type
								}}
							/>
						))}
					</ul>
					<button className={styles.add} onClick={() => addBanner()}>Add Banner</button>
				</div>
				<div className={`${styles.navs} pa_banner_nav`}>
					<ul className="">
						{navs.map((nav, i) => (
							<Link
								key={i}
								{...{
									...nav,
									data: navs,
									setData: setNavs,
									i,
									type
								}}
							/>
						))}
					</ul>
					<button className={styles.add} onClick={() => addNav()}>Add Nav Item</button>
				</div>
			</div>
		</Builder>
	);
};

export default Banners;
