import Logo from './single';

const CTACode = ({ data }) => {
	const logos = data;

	return (
		<ul className="pa_logos">
			{logos.map((logo, i) => (
				<Logo {...logo} key={i} />
			))}
		</ul>
	);
};

export default CTACode;
