import { Fragment } from "react";

import Tile from './single';

const FlexiTileCode = ({ data }) => {
	const tiles = data;
	const flexi_options = (typeof window !== `undefined` && window.localStorage.getItem(`flexi_options`)) ? JSON.parse(window.localStorage.getItem(`flexi_options`)) : {};
	let itemClass = ``;

	Object.entries(flexi_options).forEach(([key, value]) => {
		if (value) {
			itemClass += ` ${key}`;
		}

		if (typeof value === `string`) {
			itemClass += `_${value}`;
		}
	});

	console.log(data);

	return (
		<div className={`pa_cols ${itemClass}`} data-options={JSON.stringify(flexi_options)}>
			{tiles.map((tile, i) => (
				<Tile {...{ ...tile }} key={i} />
			))}
		</div>
	);
};

export default FlexiTileCode;
