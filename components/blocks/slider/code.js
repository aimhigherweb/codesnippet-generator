import { Fragment } from 'react';
import Product from './single';

import { getData } from '../../../utils/data';

const uuid = Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100);
const distance = 334;

const ProductSliderCode = ({ data }) => {
	const products = data;
	const title = getData(`slider_title`);

	return (
		<div className="pa_slider">
			<h2 id={`slider_title_${uuid}`} className="slider_heading">{title}</h2>
			<ul
				id={`slider_${uuid}`}
				className="pa_products"
				tabIndex="0"
				role="region"
				aria-labelledby={`slider_title_${uuid}`}

			>
				{products.map((product, i) => (
					<Product {...product} key={i} />
				))}
			</ul>
			<ul id={`sliderControls_${uuid}`} className="slider_controls">
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

		</div>
	);
};

export const ProductSliderCodeScript = () => (
	<script>{`const sliderScroll=e=>{const t=document.querySelector("#slider_${uuid}"),r=t.scrollLeft,l=t.scrollLeftMax;let o=r;"forwards"==e&&(0==(o=${distance}*Math.ceil(r/${distance}))?o=${distance}:o==r&&(o=r+${distance})),"backwards"==e&&(o=${distance}*Math.floor(r/${distance}))==r&&(o=r-${distance}),t.scroll({left:o,behaviour:"smooth"});const c=document.querySelector("#sliderControls_${uuid}"),s=c.querySelector(".next button"),a=c.querySelector(".previous button"),d=e=>{e.disabled=!0,e.setAttribute("aria-disabled",!0)},i=e=>{e.disabled=!1,e.setAttribute("aria-disabled",!1)};o>=l?d(s):i(s),o<=0?d(a):i(a)};document.querySelectorAll("#sliderControls_${uuid} button").forEach(e=>{e.addEventListener("click",e=>{let t=e.target;"svg"==t.tagName&&(t=t.parentElement),sliderScroll(t.dataset.direction)})});`}</script>
);

export default ProductSliderCode;
