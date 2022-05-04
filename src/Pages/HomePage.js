import HomePageHeader from "../Components/HomePageHeader";
import VideoSlider from "../Components/VideoSlider";
import AboutUs from "../Components/AboutUs";
import ServicesHomePage from "../Components/ServicesHomePage";
import Products from "../Components/Products";
import Clients from "../Components/Clients";
import OurPhotos from "../Components/OurPhotos";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <div >
      <HomePageHeader />
      <VideoSlider />
      <AboutUs />
      <ServicesHomePage />
      <Products />
      <Clients />
      <OurPhotos title={"Our Photos"} />
      <Footer />
    </div>
  );
}

export default HomePage;