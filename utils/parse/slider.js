/* eslint-disable no-restricted-syntax */
import { addData } from '../data';

const parseProduct = (data) => {
	const products = [];

	for (const child of data.children[0].children) {
		if (child.classList.contains(`pa_products`)) {
			for (const product of child.children) {
				const name = product.querySelector(`[data-attribute='product']`).innerHTML;
				const code = product.querySelector(`[data-attribute='product_code']`)?.innerHTML;
				const image = product.querySelector(`[data-attribute='image']`).src;
				const buttons = product.querySelector(`[data-attribute='ctas']`)

				let ctas = []

				for (const cta of buttons.children) {
					const button = cta.querySelector(`a`);
			
					const text = button.innerHTML;
					const link = button.href;
					const { colour } = button.dataset;
			
					ctas.push({
						text,
						link,
						colour
					});
				}

				products.push({
					name,
					code,
					image,
					cta: ctas
				});
			}
		}
	}
	return products;
};

export default parseProduct;
