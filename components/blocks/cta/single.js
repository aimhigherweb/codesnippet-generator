const CTA = ({ text, colour, link }) => {
	if (text) {
		return (
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
	}

	return null;
};

export default CTA;
