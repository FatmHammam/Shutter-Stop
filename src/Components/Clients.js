import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "./Header";
import Template from "./Template";
import Photo from "./Photo";
import homeTown from "../Images/homeTown.png";
import geekCampus from "../Images/geekCampus.png";
import nfr from "../Images/nfr.png";
import homy from "../Images/homy.png";
import summit from "../Images/summit.png";
import about_background from "../Images/about_background.svg";
import styles from "../Main.module.scss";
import "swiper/css";

function Clients() {
  const { t } = useTranslation();
  return (
    <>
      <Template
        items={[]}
        background={about_background}
        itemsContainerStyle={{ paddingBottom: 40 }}
        containerStyle={styles.background_cover_with_hover}
        header={<Header color="#C65FAA" bgColor="#C65FAA" title={t("clients")} />}
      />

      <Swiper
        spaceBetween={50}
        className={styles.wrapper}
        style={{ width: "90%", paddingBottom: 70 }}
        slidesPerView={window.innerWidth > 992 ? 5 : window.innerWidth > 768 ? 3 : 2}
      >
        <SwiperSlide>
          <Photo src={homeTown} />
        </SwiperSlide>
        <SwiperSlide>
          <Photo src={geekCampus} />
        </SwiperSlide>
        <SwiperSlide>
          <Photo src={nfr} />
        </SwiperSlide>
        <SwiperSlide>
          <Photo src={homy} />
        </SwiperSlide>
        <SwiperSlide>
          <Photo src={summit} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Clients;
