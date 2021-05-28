import { Fragment } from 'react';

const Tile = ({
	heading, content, image, link, align, width
}) => {
	const itemClass = `${align} ${width}`;
	let type;

	if (link) {
		type = `link`;
	}

	return (
		<Wrapper {...{ type, link }}>
			{image
				&& <img
					src={image.src}
					style={{ maxWidth: image.maxWidth }}
					className={itemClass}
				/>
			}
			<div
				className={itemClass}
			>
				<h3 dangerouslySetInnerHTML={{ __html: heading }} />
				<div dangerouslySetInnerHTML={{ __html: content }} />
			</div>
		</Wrapper>
	);
};

const Wrapper = ({ type, link, children }) => {
	if (type === `link`) {
		return (
			<a href={link}>
				{children}
			</a>
		);
	}

	return (
		<Fragment>
			{children}
		</Fragment>
	);
};

export default Tile;
