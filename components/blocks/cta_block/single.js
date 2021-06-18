const CTA = ({
	cta, content, colour
}) => (
	<div
		className={`cta_block background_${colour}`}
		data-colour={colour}
	>
		<p data-attribute="content">{content}</p>
		<a
			className={`block_btn background_${cta.colour}`}
			href={cta.link}
			data-colour={cta.colour}
		>
			{cta.text}
		</a>
	</div>
);

export default CTA;
