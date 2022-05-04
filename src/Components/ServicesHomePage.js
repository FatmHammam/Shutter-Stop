import styles from './ServicesHomePage.module.scss';
import Header from './Header';
import Template from './Template';
import ServicesDetails from './ServicesDetails';
import wedding from '../Images/wedding.png';
import birthdays from '../Images/birthdays.png';
import event from '../Images/event.png';


// background needs adjustment

function ServicesHomePage() {
	return (
		<div>
			<Header title={"Services"} color={"#6F4AB0	"} />
			<div className={styles.servicesLAyout}>
				<Template
					items={
						[
							<ServicesDetails photo={wedding} text="Weddings" />,
							<ServicesDetails photo={birthdays} text="Birthdays" />,
							<ServicesDetails photo={event} text="Events" />,
						]
					}
				/>
			</div>
		</div>
	);
}

export default ServicesHomePage;