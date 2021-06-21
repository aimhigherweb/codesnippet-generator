import Logo from './single';

const LogoCode = ({ data }) => {
	const logos = data;

	return (
		<ul className="pa_logos">
			{logos.map((logo, i) => (
				<Logo {...logo} key={i} />
			))}
		</ul>
	);
};

export default LogoCode;
