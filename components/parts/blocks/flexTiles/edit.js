import {
	useState, Fragment, useEffect
} from "react";
import Tile from './single';

import { addData } from '../../../../utils/data';

import Modal from '../../modal';
import Text from '../../inputs/text';
import TextArea from '../../inputs/textArea';

import { tile as tileOpts } from '../../../../_data/tileOptions';
import styles from './tiles.module.scss';

const EditTile = ({
	tile, setData, data, i, type, tileOptions = {}
}) => {
	const [modal, openModal] = useState(false);
	const [values, setValues] = useState(tile);
	const [options, setOptions] = useState(tileOptions);
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
		const tiles = data;
		const details = {
			...values,
			[section]: editorContents
		};

		tiles[i] = details;

		setValues(details);
		setData(tiles);
		addData(tiles, type);
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
		addData(tiles, type);
	};

	return (
		<Fragment>
			<Tile
				{...{
					...values,
					options
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
					<div className={`${styles.wrapper}`}>
						<div className={styles.types}>
							<h2>Select Options</h2>
							<div className={styles.items}>
								{tileOpts.map((opt) => (
									<Fragment>
										{opt.opts
											? <select
												key={opt.value}
												onChange={(e) => changeOptionValue(opt.value, e.target.value)}
												defaultValue={options[opt.value]}
											>
												<option>{opt.label}</option>
												{opt.opts.map((o) => (
													<option
														value={o.value}
													>
														{o.label}
													</option>
												))}
											</select>
											: <button
												key={opt.value}
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
								<Text
									className={` `}
									value={values?.cta?.text}
									onBlur={changeSub}
									onChange={changeSub}
									section={[`cta`, `text`]}
									hideToolbar={true}
									placeholder={`Contact Us`}
								/>
								<Text
									className={` `}
									value={values?.cta?.link}
									onBlur={changeSub}
									onChange={changeSub}
									section={[`cta`, `url`]}
									hideToolbar={true}
									placeholder={`/contact-us`}
								/>
							</Fragment>
						}
					</div>
				</Modal>
			}
		</Fragment>
	);
};

export default EditTile;
