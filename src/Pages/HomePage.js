import { useTranslation } from "react-i18next";
import Navbar from "../Components/Navbar";
import VideoSlider from "../Components/VideoSlider";
import AboutUs from "../Components/AboutUs";
import ServicesHomePage from "../Components/ServicesHomePage";
import Products from "../Components/Products";
import Clients from "../Components/Clients";
import OurPhotos from "../Components/OurPhotos";
import Footer from "../Components/Footer";

function HomePage() {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <VideoSlider />
      <AboutUs />
      <ServicesHomePage />
      <Products />
      <Clients />
      <OurPhotos title={t("photos")} />
      <Footer />
    </div>
  );
}

export default HomePage;
