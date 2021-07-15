import CTA from '../cta/single';

const Tile = ({
	heading, content, image, cta, url, options = {}, children, disableLink
}) => {
	let itemClass = ``;
	let type = ``;
	const exists = (sections) => sections.some(((sect) => sect && sect !== `` && sect !== []));

	Object.entries(options).forEach(([key, value]) => {
		if (value) {
			itemClass += ` ${key}`;
		}

		if (typeof value === `string`) {
			itemClass += `_${value}`;
		}
	});

	if (url) {
		type = `link`;
	}

	return (
		<Wrapper {...{
			type, url, disableLink, itemClass
		}}>
			{exists([image])
				&& <img
					src={image}
					style={{ maxWidth: image.maxWidth }}
					className={`feature`}
					data-attribute="image"
				/>
			}
			{exists([heading, content, cta])
				&& <div
					className={`content`}
					data-attribute="container"
					data-options={JSON.stringify(options)}
				>
					{exists([heading]) && <h3 data-attribute="heading" dangerouslySetInnerHTML={{ __html: heading }} />}
					{exists([content]) && <div data-attribute="content" dangerouslySetInnerHTML={{ __html: content }} />}
					{(exists([cta]) && cta !== [] && cta.length !== 0)
					&& <ul className="pa_cta" data-attribute="ctas">
						{cta.map((link, i) => (
							<CTA {...link} key={i} />
						))}
					</ul>
					}

				</div>
			}
			{children}
		</Wrapper>
	);
};

const Wrapper = ({
	type, url, children, disableLink, itemClass, options
}) => {
	if (type === `link`) {
		return (
			<a href={!disableLink && url} className={`${itemClass} pa_tile`} data-options={JSON.stringify(options)}>
				{children}
			</a>
		);
	}

	return (
		<div className={`${itemClass} pa_tile`} data-options={JSON.stringify(options)}>
			{children}
		</div>
	);
};

export default Tile;
