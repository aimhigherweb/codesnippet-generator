const Banner = ({ image, link, i }) => (
	<li data-slide={i}>
		<a
			className={`pa_banner_item`}
			href={link}
		>
			<img src={image} />
		</a>
	</li>
);

export default Banner;
