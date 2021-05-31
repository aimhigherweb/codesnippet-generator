import { Fragment } from 'react';

const Tile = ({
	heading, content, image, cta, link, options = {}, children
}) => {
	let itemClass = ``;
	let type = ``;

	Object.entries(options).forEach(([key, value]) => {
		itemClass += ` ${key}`;

		if (typeof value === `string`) {
			itemClass += `_${value}`;
		}
	});

	if (link) {
		type = `link`;
	}

	return (
		<Wrapper {...{ type, link }}>
			{image
				&& <img
					src={image.url}
					style={{ maxWidth: image.maxWidth }}
					className={itemClass}
					data-attribute="image"
				/>
			}
			<div
				className={`${itemClass} content`}
				data-attribute="container"
				data-options={JSON.stringify(options)}
			>
				{(heading && heading !== ``) && <h3 data-attribute="heading" dangerouslySetInnerHTML={{ __html: heading }} />}
				{(content && content !== ``) && <div data-attribute="content" dangerouslySetInnerHTML={{ __html: content }} />}
				{cta
					&& <Fragment>
						<a href={cta.url} className="pa_btn">{cta.text}</a>
					</Fragment>
				}
				{children}
			</div>

		</Wrapper>
	);
};

const Wrapper = ({
	type, link, children
}) => {
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
