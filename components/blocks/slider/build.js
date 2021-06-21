import {
	useState
} from "react";
import Builder from '../../parts/builder';

import Product from './edit';

import { addData } from '../../../utils/data';

import styles from './productSlider.module.scss';

const ProductSlider = ({ type }) => {
	const [products, setProducts] = useState([]);
	const details = {
		type,
		setHook: setProducts
	};
	const addProduct = () => {
		const newProducts = [
			...products,
			{
				name: `Weidmuller 1469470000 - PRO ECO 72W 24V 3A`,
				image: `https://pacificautomation.com.au/product/image/medium/1019302_0.jpg`,
				cta: [
					{
						text: `Learn More`,
						colour: `blue_light`
					},
					{
						text: `Buy Now`,
						colour: `white`
					}
				]
			}
		];
		addData(newProducts, type);
		setProducts(newProducts);
	};

	return (
		<Builder {...details}>
			<div className={styles.container}>
				<ul className={`pa_products`}>
					{products.map((product, i) => (
						<Product
							key={i}
							{...{
								...product,
								data: products,
								setData: setProducts,
								i,
								type
							}}
						/>
					))}

				</ul>
				<button className={styles.add} onClick={() => addProduct()}>Add Product</button>
			</div>
		</Builder>
	);
};

export default ProductSlider;
