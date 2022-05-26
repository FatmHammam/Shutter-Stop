import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
      <OurPhotos
        title={t("our_photos")}
        more={
          <div
            style={{
              right: 50,
              height: 50,
              display: "flex",
              paddingRight: 20,
              cursor: "pointer",
              position: "absolute",
              alignItems: "center",
              backgroundColor: '#fff',
            }}
          >
            <p
              style={{
                fontSize: 26,
                marginLeft: 28,
                marginRight: 10,
                fontWeight: 500,
                color: "#6F4AB0",
                fontFamily: "Roboto",
              }}
            >
              See more
            </p>
            <FontAwesomeIcon size="lg" icon={faArrowRight} color="#6F4AB0" />
          </div>
        }
      />
      <Footer />
    </div>
  );
}

export default HomePage;
