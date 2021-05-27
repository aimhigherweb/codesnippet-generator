import styles from './modal.module.scss';

const Modal = ({ children, closeModal }) => (
	<div className={styles.modal}>
		<button className={styles.close} onClick={() => closeModal(false)}>Close Modal</button>
		{children}
	</div>
);

export default Modal;
