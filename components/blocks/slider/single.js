import CTA from '../cta/single';

const Product = ({
	image, name, code, cta
}) => {
	const exists = (sections) => sections.some(((sect) => sect && sect !== `` && sect !== []));

	return (
		<li className={`pa_product`}>
			<h3 data-attribute="product">{name}</h3>
			{exists([code])
			&& <p className="product_code" data-attribute="product_code">{code}</p>
			}
			<img src={image} data-attribute="image" />
			{(exists([cta]) && cta !== [])
				&& <ul className="pa_cta" data-attribute="ctas">
					{cta.map((link, i) => (
						<CTA {...link} key={i} />
					))}
				</ul>
			}
		</li>
	);
};

export default Product;
