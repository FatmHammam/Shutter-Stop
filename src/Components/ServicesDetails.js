import styles from './ServicesDetails.module.scss';

function ServicesDetails({ photo, text }) {
	return (
		<div className={styles.container}>
			<img src={photo} alt="" />
			<h2 className={styles.text}>{text}</h2>
		</div>
	);
}

export default ServicesDetails;