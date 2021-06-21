import {
	useState
} from "react";
import Product from './single';
import Text from '../../parts/inputs/text';

import { addData } from '../../../utils/data';

import Modal from '../../parts/modal';
import { colours } from '../../../_data/tileOptions';

import styles from './productSlider.module.scss';

import CTAFields from '../../parts/ctaFields';

const EditProduct = ({
	image, name, code, cta, setData, data, i, type
}) => {
	const [modal, openModal] = useState(false);
	const [imageValue, setImage] = useState(image);
	const [nameValue, setName] = useState(name);
	const [codeValue, setCode] = useState(code);
	const [ctasValue, setCTAs] = useState(cta);
	const updateDetails = (products) => {
		setData(products);
		addData(products, type);
	};
	const changeImage = (editorContents) => {
		const products = data;
		products[i].image = editorContents;
		setImage(editorContents);
		updateDetails(products);
	};
	const changeName = (editorContents) => {
		const products = data;
		products[i].name = editorContents;
		setName(editorContents);
		updateDetails(products);
	};
	const changeCode = (editorContents) => {
		const products = data;
		products[i].code = editorContents;
		setCode(editorContents);
		updateDetails(products);
	};
	const changeCTA = (editorContents) => {
		console.log(editorContents);
		const products = data;
		products[i].cta = editorContents;
		setCTAs(editorContents);
		updateDetails(products);
	};
	const addCTA = () => {
		const newCTAs = [
			...ctasValue,
			{
				text: `CTA Button`
			}
		];
		addData(newCTAs, type);
		setCTAs(newCTAs);
	};
	const saveChanges = () => {
		addData(data, type);
		openModal(!modal);
	};

	return (
		<div className={styles.product}>
			<button
				className={styles.edit}
				onClick={() => openModal(!modal)}
			>
				Edit
			</button>
			<Product {...{
				image: imageValue,
				name: nameValue,
				code: codeValue,
				cta: ctasValue
			}} />
			{modal
				&& <Modal closeModal={openModal}>
					<button className={styles.save} onClick={() => saveChanges()}>Save Changes</button>
					<div className={styles.fields}>
						<h2>Product Name</h2>
						<Text
							value={nameValue}
							onBlur={changeName}
							onChange={changeName}
							hideToolbar={true}
							placeholder={`Weidmuller 1469470000 - PRO ECO 72W 24V 3A`}
						/>
						<h2>Product Code</h2>
						<Text
							value={codeValue}
							onBlur={changeCode}
							onChange={changeCode}
							hideToolbar={true}
							placeholder={`1019302`}
						/>
						<h2>Image</h2>
						<Text
							value={imageValue}
							onBlur={changeImage}
							onChange={changeImage}
							hideToolbar={true}
							placeholder={`https://pacificautomation.com.au/content/files/products/Pacific%20Automation_rgb_no%20whitespace_web.png`}
						/>
						<h2>Call to Action</h2>
						{ctasValue?.map((c, j) => (
							<CTAFields key={j} {...{
								...c,
								i: j,
								change: changeCTA,
								ctas: ctasValue,
								setCTAs
							}} />
						))}
						<button className={styles.addCTA} onClick={() => addCTA()}>Add CTA</button>
					</div>
				</Modal>
			}
		</div>
	);
};

export default EditProduct;
