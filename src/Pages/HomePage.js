import { useTranslation } from "react-i18next";
import Navbar from "../Components/Navbar";
import VideoSlider from "../Components/VideoSlider";
import AboutUs from "../Components/AboutUs";
import ServicesSlider from "../Components/ServicesSlider";
import Products from "../Components/Products";
import Clients from "../Components/Clients";
import OurPhotos from "../Components/OurPhotos";
import Footer from "../Components/Footer";
import wedding from "../Images/wedding.png";
import birthdays from "../Images/birthdays.png";
import event from "../Images/event.png";

function HomePage() {
  const { t } = useTranslation();

  const services = [
    { photo: wedding, text: t("weddings") },
    { photo: birthdays, text: t("birthdays") },
    { photo: event, text: t("events") },
  ];

  return (
    <div>
      <Navbar />
      <VideoSlider />
      <AboutUs />
      <ServicesSlider items={services} />
      <Products />
      <Clients />
      <OurPhotos title={t("our_photos")} />
      <Footer />
    </div>
  );
}

export default HomePage;
