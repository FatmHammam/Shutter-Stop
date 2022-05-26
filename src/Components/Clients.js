import { useTranslation } from "react-i18next";
import Header from "./Header";
import Template from "./Template";
import Photo from "./Photo";
import homeTown from "../Images/homeTown.png";
import geekCampus from "../Images/geekCampus.png";
import nfr from "../Images/nfr.png";
import homy from "../Images/homy.png";
import summit1 from "../Images/summit1.png";
import summit2 from "../Images/summit2.png";
import about_background from "../Images/about_background.svg";
import styles from "../Main.module.scss";

function Clients() {
  const { t } = useTranslation();
  return (
    <Template
      background={about_background}
      itemsContainerStyle={{ paddingBottom: 70 }}
      containerStyle={styles.background_cover_with_hover}
      itemStyle={{
        width: `${
          100 / (window.innerWidth > 992 ? 6 : window.innerWidth > 768 ? 3 : 2)
        }%`,
        marginTop: 70,
      }}
      header={<Header color="#C65FAA" bgColor="#C65FAA" title={t("clients")} />}
      items={[
        <Photo src={homeTown} />,
        <Photo src={geekCampus} />,
        <Photo src={nfr} />,
        <Photo src={homy} />,
        <Photo src={summit1} />,
        <Photo src={summit2} />,
      ]}
    />
  );
}

export default Clients;
