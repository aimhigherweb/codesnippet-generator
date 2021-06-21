import {
	useEffect,
	useState
} from "react";
import Builder from '../../parts/builder';

import Product from './edit';

import Text from '../../parts/inputs/text';
import Modal from '../../parts/modal';

import { addData, getData } from '../../../utils/data';

import styles from './productSlider.module.scss';

const ProductSlider = ({ type }) => {
	const [products, setProducts] = useState([]);
	const [title, setTitle] = useState(``);
	const [modal, openModal] = useState(false);
	const details = {
		type,
		setHook: setProducts
	};
	const changeTitle = (editorContents) => {
		setTitle(editorContents);
		addData(editorContents, `slider_title`);
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

	useEffect(() => {
		const savedTitle = getData(`slider_title`);

		if (savedTitle && typeof savedTitle === `string`) {
			setTitle(savedTitle);
		} else {
			const defaultTitle = `Browse Our Products`;
			setTitle(defaultTitle);
			addData(defaultTitle, `slider_title`);
		}
	}, []);

	return (
		<Builder {...details}>
			<div className={styles.container}>
				<button onClick={() => openModal(!modal)}>
					Edit Title
				</button>
				<h2 className="slider_heading">{title}</h2>
				{modal
					&& <Modal closeModal={openModal}>
						<div className={styles.fields}>
							<Text
								value={title}
								onBlur={changeTitle}
								onChange={changeTitle}
								hideToolbar={true}
								placeholder={`Browse Our Products`}
							/>
						</div>
					</Modal>
				}
				<ul className={`pa_products`} tabIndex="0">
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
