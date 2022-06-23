import { useTranslation } from "react-i18next";
import Navbar from "../Components/Navbar";
import Event from "../Components/Event";
import CoreFeatures from "../Components/CoreFeatures";
import Output from "../Components/Output";
import OurPhotos from "../Components/OurPhotos";
import ReservationForm from "../Components/ReservationForm";
import Footer from "../Components/Footer";
import pro from "../Images/pro.png";
import { useRef } from "react";


function Products() {
  const resultRef = useRef(null);
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <Event
        img={pro}
        color="#6F4AB0"
        bgcolor="#7B5EAC"
        title={t("products")}
        resultRef={resultRef}
      />
      <CoreFeatures />
      <Output />
      <OurPhotos title={t("portofolio")} />
      <ReservationForm ref={resultRef} />
      <Footer />
    </div>
  );
}

export default Products;
