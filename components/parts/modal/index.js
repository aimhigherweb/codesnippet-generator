import styles from './modal.module.scss';

const Modal = ({ children, closeModal, className }) => (
	<div className={`${styles.modal} ${className}`} data-modal="true">
		<button className={styles.close} onClick={() => closeModal(false)}>Close Modal</button>
		{children}
	</div>
);

export default Modal;
