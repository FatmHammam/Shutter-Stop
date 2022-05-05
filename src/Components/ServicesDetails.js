import styles from './ServicesDetails.module.scss';

function ServicesDetails({ photo, text }) {
	return (
		<div className={styles.container}>
			<img src={photo} alt="" style={{width: '100%'}} />
			<h2 className={styles.text}>{text}</h2>
		</div>
	);
}

export default ServicesDetails;