import { Fragment } from 'react';
import Product from './single';

import { getData } from '../../../utils/data';

const ProductSliderCode = ({ data }) => {
	const products = data;
	const title = getData(`slider_title`);
	const uuid = Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100);
	const distance = 270;

	return (
		<div className="pa_slider">
			<h2 id={`slider_title_${uuid}`}>{title}</h2>
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
				<li class="previous">
					<button data-direction="backwards">
						<svg viewBox="0 0 8 5"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=".2" d="M7 4L3.75.5.5 4"/></svg>
						<span className="sr-only">Previous</span>
					</button>
				</li>
				<li class="next">
					<button data-direction="forwards">
						<svg viewBox="0 0 8 5"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=".2" d="M7 4L3.75.5.5 4"/></svg>
						<span className="sr-only">Previous</span>
					</button>
				</li>
			</ul>
			<script>{`document.querySelectorAll("#sliderControls_${uuid} button").forEach(e=>{e.addEventListener("click",e=>{let t=e.target;"svg"==t.tagName&&(t=t.parentElement);const o=t.dataset.direction,l=document.querySelector("#slider_${uuid}"),r=l.scrollLeft,s=l.scrollLeftMax;console.log({opt:t,direction:o,slider:l,position:r,max:s});let i=r;"forwards"==o&&(i=r+${distance}),"backwards"==o&&(i=r-${distance}),console.log(i),l.scroll({left:i,behaviour:"smooth"});const n=document.querySelector("#sliderControls_${uuid}"),a=n.querySelector(".next button"),d=n.querySelector(".previous button"),c=e=>{e.disabled=!0,e.setAttribute("aria-disabled",!0)},u=e=>{e.disabled=!1,e.setAttribute("aria-disabled",!1)};console.log({controls:n,next:a,previous:d,disableButton:c,enableButton:u,newPosition:i,max:s}),i>=s?c(a):u(a),i<=0?c(d):u(d)})});`}</script>
		</div>
	);
};

export default ProductSliderCode;
