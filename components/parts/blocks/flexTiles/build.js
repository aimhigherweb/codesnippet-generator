import {
	useState, Fragment, useEffect
} from "react";
import Builder from '../../builder';

import Edit from './edit';

import { container } from '../../../../_data/tileOptions';

import { addData } from '../../../../utils/data';

import styles from './tiles.module.scss';

const FlexiTiles = ({ type }) => {
	const [tiles, setTiles] = useState([]);
	const [options, setOptions] = useState({});
	const details = {
		type,
		setHook: setTiles
	};
	const addTile = () => {
		const newTiles = [
			...tiles,
			{
				content: `Tile Content`
			}
		];
		addData(newTiles, type);
		setTiles(newTiles);
	};
	const changeOptions = (opt, checked) => {
		const opts = options;

		opts[opt] = checked;
		setOptions(opts);

		window.localStorage.setItem(`flexi_options`, JSON.stringify(opts));
	};

	let itemClass = ``;

	useEffect(() => {
		if (typeof window !== `undefined` && window.localStorage.getItem(`flexi_options`)) {
			setOptions(JSON.parse(window.localStorage.getItem(`flexi_options`)));
		}
	}, []);

	Object.entries(options).forEach(([key, value]) => {
		itemClass += ` ${key}`;

		if (typeof value === `string`) {
			itemClass += `_${value}`;
		}
	});

	return (
		<Builder {...details}>
			<fieldset className={styles.types}>
				<legend>Select Options</legend>
				<div className={styles.items}>
					{container.map((opt) => (
						<Fragment key={opt.value}>
							<input
								id={opt.value}
								name="opt_type"
								type="checkbox"
								defaultChecked={options[opt.value]}
								onChange={(e) => changeOptions(opt.value, e?.target?.checked)}
							/>
							<label
								htmlFor={opt.value}

							>
								{opt.label}
							</label>
						</Fragment>
					))}
				</div>
			</fieldset>
			<div className={`${styles.cols} pa_cols ${itemClass}`}>
				{tiles.map((tile, i) => (
					<Edit
						key={i}
						{...{
							tile,
							data: tiles,
							setData: setTiles,
							tileOptions: tile.options,
							i,
							type
						}}
					/>
				))}

			</div>
			<button className={styles.add} onClick={() => addTile()}>Add Tile</button>
		</Builder>
	);
};

export default FlexiTiles;
