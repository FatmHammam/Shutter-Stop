import { useTranslation } from "react-i18next";
import Navbar from "../Components/Navbar";
import Event from "../Components/Event";
import ServicesSlider from "../Components/ServicesSlider";
import Output from "../Components/Output";
import Packages from "../Components/Packages";
import OurPhotos from "../Components/OurPhotos";
import Footer from "../Components/Footer";
import event1 from "../Images/event1.png";
import wedding from "../Images/wedding.png";
import wedding2 from "../Images/wedding2.png";
import tree from "../Images/tree.png";

function Services() {
  const { t } = useTranslation();
  const services = [
    { photo: wedding, text: t("photos") },
    { photo: wedding2, text: t("chroma") },
    { photo: tree, text: t("tree") },
  ];

  return (
    <div>
      <Navbar />
      <Event
        img={event1}
        title={"EVENTS"}
        color={"#C65FAA"}
        bgcolor={"#C65FAA"}
        containerStyle={{marginBottom: 50}}
      />
      <ServicesSlider items={services} />
      <Output />
      <Packages />
      <OurPhotos title={"Our Work"} />
      <Footer />
    </div>
  );
}

export default Services;
