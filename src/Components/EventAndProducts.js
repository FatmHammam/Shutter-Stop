import styles from './EventsAndProducts.module.scss';

function EventsAndProducts({ img, title, bgcolor, color }) {
	return (
		<div className={styles.container}>
			<div className={styles.eventDetails} style={{ backgroundColor: bgcolor }}>
				<div className={styles.empty}>
					<img src={img} />
				</div>
				<div className={styles.details} >
					<h1>{title}</h1>
					<hr></hr>
					<p>Most people like the idea of a Photo Booth for their upcoming events because it is
						fun and entertaining, but they always think all photo booth are the same – Stand in front of
						the machine, snap a photo and grab a print. Shutter Stop simplified the process of printing and sharing photo booth’s
						photos to social media instantly.
						It makes the photo booths connected, interactive and creates a marvelous photo experience. </p>
					<button style={{ color: color }}>Reserve Now</button>
				</div>
			</div>
		</div>
	);
}

export default EventsAndProducts;