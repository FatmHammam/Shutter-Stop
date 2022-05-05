import { useTranslation } from "react-i18next";
import Header from "./Header";
import Template from "./Template";
import ClientsLogos from "./ClientsLogos";
import homeTown from "../Images/homeTown.png";
import geekCampus from "../Images/geekCampus.png";
import nfr from "../Images/nfr.png";
import homy from "../Images/homy.png";
import summit1 from "../Images/summit1.png";
import summit2 from "../Images/summit2.png";
import about_background from "../Images/about_background.svg";

function Clients() {
  const { t } = useTranslation();
  return (
    <Template
      background={about_background}
      itemStyle={{ width: `${100 / 6}%` }}
      header={<Header color="#C65FAA" bgColor="#C65FAA" title={t("clients")} />}
      items={[
        <ClientsLogos photo={homeTown} />,
        <ClientsLogos photo={geekCampus} />,
        <ClientsLogos photo={nfr} />,
        <ClientsLogos photo={homy} />,
        <ClientsLogos photo={summit1} />,
        <ClientsLogos photo={homeTown} />,
        <ClientsLogos photo={homeTown} />,
        <ClientsLogos photo={geekCampus} />,
        <ClientsLogos photo={nfr} />,
        <ClientsLogos photo={homy} />,
        <ClientsLogos photo={summit2} />,
        <ClientsLogos photo={homeTown} />,
      ]}
    />
  );
}

export default Clients;
