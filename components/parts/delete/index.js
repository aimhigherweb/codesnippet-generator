import { useRouter } from 'next/router';
import { addData } from '../../../utils/data';
import styles from './delete.module.scss';

const DeleteButton = ({
	data, i, type, openModal, modal
}) => {
	console.log({ data, i, type });
	const router = useRouter();
	const deleteItem = () => {
		const confirm = window.confirm(`Are you sure you want to delete this item?`);

		if (!confirm) return;

		const newData = data;

		newData.splice(i, 1);

		addData(newData, type);
		openModal(!modal);
		router.reload(window.location.pathname);
	};

	return (
		<button
			className={styles.remove}
			onClick={() => deleteItem()}
		>
			Delete Item
		</button>
	);
};

export default DeleteButton;
