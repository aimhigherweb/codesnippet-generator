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
					<li class="controls">
						<ul id={`bannerControls`} className="banner_controls">
							<li className="previous">
								<button data-direction="backwards">
									<svg viewBox="0 0 8 5"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".2" d="M7 4L3.75.5.5 4"/></svg>
									<span className="sr-only">Previous</span>
								</button>
							</li>
							<li className="next">
								<button data-direction="forwards">
									<svg viewBox="0 0 8 5"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".2" d="M7 4L3.75.5.5 4"/></svg>
									<span className="sr-only">Previous</span>
								</button>
							</li>
						</ul>
					</li>
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

		</Fragment>
	);
};

export const BannerCodeScript = () => (
	<script>{`const banner=document.querySelector(".pa_banner_home"),controls=document.querySelector(".banner_controls");let autoPlay;const changeSlide=(e,t)=>{banner.querySelectorAll("li.current").forEach(e=>{e.classList.remove("current")}),e.classList.add("current"),t&&autoSlide()},autoSlide=()=>{autoPlay=setTimeout(()=>{const e=banner.querySelector("li.current"),t=e.nextElementSibling;changeSlide(t?e.nextElementSibling:banner.querySelector("li[data-slide]"),!0)},1e4)},navigateSlide=e=>{const t=banner.querySelector("li.current"),n=t.nextElementSibling,r=t.previousElementSibling;"forwards"==e?changeSlide(n||banner.querySelector("li[data-slide]")):r&&!r.classList.contains("controls")?changeSlide(r):changeSlide(banner.lastElementChild)};window.onload=(()=>{banner.querySelector("li.current")||banner.querySelector("li[data-slide]").classList.add("current"),banner.addEventListener("mouseenter",()=>{clearTimeout(autoPlay)}),banner.addEventListener("mouseout",()=>{autoSlide()}),controls.addEventListener("mouseenter",()=>{clearTimeout(autoPlay)}),controls.addEventListener("mouseout",()=>{autoSlide()}),banner.classList.add("active"),autoSlide()}),controls.querySelectorAll("button").forEach(e=>{e.addEventListener("click",e=>{let t=e.target;"svg"==t.tagName&&(t=t.parentElement),navigateSlide(t.dataset.direction)})});`}</script>
);

export default BannerCode;
