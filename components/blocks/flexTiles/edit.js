import {
	useState, Fragment, useEffect
} from "react";
import Tile from './single';

import { addData } from '../../../utils/data';

import Modal from '../../parts/modal';
import Text from '../../parts/inputs/text';
import TextArea from '../../parts/inputs/textArea';
import DeleteButton from "../../parts/delete";
import { tile as tileOpts, colours } from '../../../_data/tileOptions';
import styles from './tiles.module.scss';

import CTAFields from '../../parts/ctaFields';

const EditTile = ({
	tile, setData, data, i, type, tileOptions = {}
}) => {
	const [modal, openModal] = useState(false);
	const [values, setValues] = useState(tile);
	const [options, setOptions] = useState(tileOptions);
	const [ctas, setCTAs] = useState(tile.cta || []);
	const changeOptions = (opt, checked) => {
		const tiles = data;
		const opts = options;
		const details = {
			...opts,
			[opt]: !checked
		};

		setOptions(details);

		tiles[i].options = details;

		addData(tiles, type);
	};
	const changeOptionValue = (opt, value) => {
		const opts = options;
		const tiles = data;
		const details = {
			...opts,
			[opt]: value
		};

		setOptions(details);

		tiles[i].options = details;

		addData(tiles, type);
	};
	const change = (editorContents, section) => {
		console.log(editorContents, section);
		const tiles = data;
		const details = {
			...values,
			[section]: editorContents
		};

		tiles[i] = details;

		console.log(tiles[i]);

		setValues(details);
		setData(tiles);
	};
	const changeSub = (editorContents, section) => {
		const tiles = data;
		const [main, sub] = section;
		const details = {
			...values,
			[main]: {
				...values[main],
				[sub]: editorContents
			}
		};

		tiles[i] = details;

		setValues(details);
		setData(tiles);
	};
	const saveChanges = () => {
		addData(data, type);
		openModal(!modal);
	};
	const addCTA = () => {
		const newCTAs = [
			...ctas,
			{
				text: `CTA Button`
			}
		];
		addData(newCTAs, type);
		setCTAs(newCTAs);
	};

	return (
		<Fragment>
			<Tile
				{...{
					...values,
					options,
					disableLink: true
				}}
			>
				<button
					className={`${styles.edit} edit`}
					onClick={() => openModal(!modal)}
				>
					Edit
				</button>
			</Tile>
			{modal
				&& <Modal closeModal={openModal} className={`modal`}>
					<button className={styles.save} onClick={() => saveChanges()}>Save Changes</button>
					<div className={`${styles.wrapper}`}>
						<div className={styles.types}>
							<h2>Select Options</h2>
							<div className={styles.items}>
								{tileOpts.map((opt) => (
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
							</div>
						</div>
						<h2>Heading</h2>
						<Text
							className={`${styles.heading} `}
							value={values.heading}
							onBlur={change}
							onChange={change}
							section="heading"
							hideToolbar={false}
							placeholder={`Tile Heading`}
						/>
						<h2>Content</h2>
						<TextArea
							className={`${styles.content}`}
							value={values.content}
							onBlur={change}
							onChange={change}
							section="content"
							hideToolbar={false}
							placeholder={`Content`}
						/>
						{options.link
							&& <Fragment>
								<h2>Tile Link</h2>
								<Text
									className={` `}
									value={values?.url}
									onBlur={change}
									onChange={change}
									section={`url`}
									hideToolbar={true}
									placeholder={`https://pacificautomation.com.au/products/industrial-automation/motor-control`}
								/>
							</Fragment>
						}
						{options.image
							&& <Fragment>
								<h2>Flexi Image</h2>
								<Text
									className={` `}
									value={values?.image?.url}
									onBlur={changeSub}
									onChange={changeSub}
									section={[`image`, `url`]}
									hideToolbar={true}
									placeholder={`https://pacificautomation.com.au/content/files/images/PA_office.jpg`}
								/>
							</Fragment>
						}
						{options.cta
							&& <Fragment>
								<h2>Call to Action</h2>
								{ctas?.map((cta, j) => (
									<CTAFields key={j} {...{
										...cta, i: j, change, ctas, setCTAs
									}} />
								))}
								<button className={styles.addCTA} onClick={() => addCTA()}>Add CTA</button>
							</Fragment>
						}
						<DeleteButton
							{...{
								data,
								i,
								type,
								openModal,
								modal
							}}
						/>
					</div>
				</Modal>
			}
		</Fragment>
	);
};

export default EditTile;
