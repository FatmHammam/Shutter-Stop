import ReservationForm from "../Components/ReservationForm";
import CoreFeatures from "../Components/CoreFeatures";
import Production from "../Components/Production";
import Output from "../Components/Output";
import Footer from "../Components/Footer";
import OurPhotos from "../Components/OurPhotos";

function Products() {
	return (
		<div>
			<Production />
			<CoreFeatures />
			<Output />
			<OurPhotos title={"Portofolio"} />
			<ReservationForm />
			<Footer />
		</div>
	);
}

export default Products;