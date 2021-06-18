import {
	useState, Fragment, useEffect
} from "react";
import Builder from '../../parts/builder';

import Edit from './edit';

import { container } from '../../../_data/tileOptions';

import { addData } from '../../../utils/data';

import styles from './tiles.module.scss';

const FlexiTiles = ({ type }) => {
	const [tiles, setTiles] = useState([]);
	const [options, setOptions] = useState({});
	const [itemClass, setItemClass] = useState(``);
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

		opts[opt] = !checked;

		setOptions(opts);

		generateClass(opts);

		window.localStorage.setItem(`flexi_options`, JSON.stringify(opts));
	};
	const changeOptionValue = (opt, value) => {
		const opts = options;

		opts[opt] = value;

		setOptions(opts);

		generateClass(opts);

		window.localStorage.setItem(`flexi_options`, JSON.stringify(opts));
	};
	const generateClass = (opts) => {
		let classes = ``;

		Object.entries(opts).forEach(([key, value]) => {
			if (key && value) {
				classes += ` ${key}`;
			}

			if (typeof value === `string`) {
				classes += `_${value}`;
			}
		});

		console.log(classes);

		setItemClass(classes);
	};
	const saveOptions = () => {
		generateClass(options);
	};

	useEffect(() => {
		if (typeof window !== `undefined` && window.localStorage.getItem(`flexi_options`)) {
			const opts = JSON.parse(window.localStorage.getItem(`flexi_options`));

			setOptions(opts);
			generateClass(opts);
		}
	}, []);

	return (
		<Builder {...details}>
			<fieldset className={styles.types}>
				<legend>Select Options</legend>
				<div className={styles.items}>
					{container.map((opt) => (
						<Fragment key={opt.value}>
							{opt.opts
								? <select
									onChange={(e) => changeOptionValue(opt.value, e.target.value)}
									defaultValue={options[opt.value]}
								>
									<option>{opt.label}</option>
									{opt.opts.map((o) => (
										<option
											key={o.value}
											value={o.value}
										>
											{o.label}
										</option>
									))}
								</select>
								: <button
									onClick={() => changeOptions(opt.value, options[opt.value])}
									aria-pressed={options[opt.value]}
								>
									{opt.label}
								</button>
							}
						</Fragment>
					))}
					<button onClick={() => saveOptions()} className={styles.options}>Update Options</button>
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
