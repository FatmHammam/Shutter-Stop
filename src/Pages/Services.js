import OurPhotos from "../Components/OurPhotos";
import Output from "../Components/Output";
import Packages from "../Components/Packages";
import ServicesWedding from "../Components/ServicesWedding";
import HomePageHeader from "../Components/HomePageHeader";
import Footer from "../Components/Footer";
import event1 from "../Images/event1.png";
import EventsAndProducts from "../Components/EventAndProducts";

function Services() {
	return (
		<div >
			< HomePageHeader />
			<EventsAndProducts
				title={"EVENTS"}
				img={event1}
				bgcolor={"#C65FAA"}
				color={"#C65FAA"}
			/>
			<ServicesWedding />
			<Output />
			<Packages />
			<OurPhotos title={"Our Work"} />
			<Footer />
		</div>
	);
}

export default Services;