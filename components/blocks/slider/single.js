const Logo = ({ logo, link }) => (
	<li>
		<a
			className={`pa_logo`}
			href={link}
		>
			<img src={logo} />
		</a>
	</li>
);

export default Logo;
