const Link = ({ text, link }) => (
	<li>
		<a
			className={`pa_nav_link`}
			href={link}
			data-text={text}
		>
			{text}
			<span className={`pa_nav_btn`}>Shop Now</span>
		</a>
	</li>
);

export default Link;
