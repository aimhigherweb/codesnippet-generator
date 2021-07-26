import CTA from '../cta/single';

const Tile = ({
	heading, content, image, cta, url, options = {}, children, disableLink
}) => {
	let itemClass = ``;
	const exists = (sections) => sections.some(((sect) => sect && sect !== `` && sect !== []));

	Object.entries(options).forEach(([key, value]) => {
		if (value) {
			itemClass += ` ${key}`;
		}

		if (typeof value === `string`) {
			itemClass += `_${value}`;
		}
	});

	return (
		<div className={`${itemClass} pa_tile`} data-options={JSON.stringify(options)}>
			{exists([image])
				&& <img
					src={image}
					className={`feature`}
					data-attribute="image"
				/>
			}
			{url && <a href={!disableLink && url} className={`pa_tile_link`} data-attribute="tile-link" ><span className="sr-only">Click here</span></a>}
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
		</div>
	);
};

export default Tile;
