import {
	useState
} from "react";
import Builder from '../../builder';

import Tile from './single';

import { addData } from '../../../../utils/data';

const FlexiTiles = ({ type }) => {
	const [tiles, setTiles] = useState([]);
	const details = {
		type,
		setHook: setTiles
	};
	const addTile = () => {
		const newTiles = [
			...tiles,
			{
				heading: `Tile Heading`,
				content: `Tile Content`
			}
		];
		addData(newTiles);
		setTiles(newTiles);
	};

	return (
		<Builder {...details}>
			<div>
				{tiles.map((tile, i) => (
					<Tile
						key={i}
						{...{
							...tile,
							data: tiles,
							setData: setTiles,
							i
						}}
					/>
				))}
				<button onClick={() => addTile()}>Add Tile</button>
			</div>
		</Builder>
	);
};

export default FlexiTiles;
