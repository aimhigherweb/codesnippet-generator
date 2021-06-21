import Product from './single';

const ProductSliderCode = ({ data }) => {
	const products = data;

	return (
		<ul className="pa_products">
			{products.map((product, i) => (
				<Product {...product} key={i} />
			))}
		</ul>
	);
};

export default ProductSliderCode;
