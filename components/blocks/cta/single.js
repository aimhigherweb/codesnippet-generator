const CTA = ({ text, colour, link }) => (
	<li>
		<a
			className={`pa_btn background_${colour}`}
			href={link}
			data-colour={colour}
		>
			{text}
		</a>
	</li>
);

export default CTA;
