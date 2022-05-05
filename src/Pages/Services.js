import Navbar from "../Components/Navbar";
import Event from "../Components/Event";
import ServicesWedding from "../Components/ServicesWedding";
import Output from "../Components/Output";
import Packages from "../Components/Packages";
import OurPhotos from "../Components/OurPhotos";
import Footer from "../Components/Footer";
import event1 from "../Images/event1.png";

function Services() {
  return (
    <div>
      <Navbar />
      <Event
        img={event1}
        title={"EVENTS"}
        color={"#C65FAA"}
        bgcolor={"#C65FAA"}
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
