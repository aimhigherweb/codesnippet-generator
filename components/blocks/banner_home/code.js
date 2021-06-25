import { Fragment } from 'react';
import Banner from './banner/single';
import Link from './nav/single';

import { getData } from '../../../utils/data';

const BannerCode = ({ data }) => {
	const banners = getData(`banner_home_banners`);
	const navs = getData(`banner_home_navs`);

	return (
		<Fragment>
			<div className="pa_banner_home_container">
				<ul className="pa_banner_home">
					{banners.map((banner, i) => (
						<Banner {...{ ...banner, i }} key={i} />
					))}
				</ul>
				<nav className="pa_banner_nav">
					<ul>
						{navs.map((nav, i) => (
							<Link {...nav} key={i} />
						))}
					</ul>
				</nav>
			</div>
			<script>{`window.onload=(()=>{const e=document.querySelector(".pa_banner_home"),t=e.children.length;let c=0;const r=t=>{e.querySelectorAll("li.current").forEach(e=>e.classList.remove("current")),e.children[t].classList.add("current"),c=t+1,l()},l=()=>{setTimeout(()=>{r(c<t?c:c=0)},5e3)};e.classList.add("active"),r(c)});`}</script>
		</Fragment>
	);
};

export default BannerCode;
