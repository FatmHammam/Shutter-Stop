import { useTranslation } from "react-i18next";
import Header from "./Header";
import Template from "./Template";
import OutputItem from "./OutputItem";
import gif1 from "../Images/gif1.png";
import gif2 from "../Images/gif2.png";
import gif3 from "../Images/gif3.png";
import about_background from "../Images/about_background.svg";
import styles from "../Main.module.scss";

function Output() {
  const { t } = useTranslation();
  return (
    <Template
      background={about_background}
      itemsContainerStyle={{ marginTop: 50 }}
      containerStyle={styles.background_cover_with_hover}
      itemStyle={{ width: `${100 / (window.innerWidth > 992 ? 3 : 1)}%`, padding: 0 }}
      header={<Header centered={false} color="#C65FAA" bgColor="#C65FAA" title={t("output")} />}
      items={[
        <OutputItem image={gif1} text={t("gifs")} />,
        <OutputItem image={gif2} text={t("threed_images")} />,
        <OutputItem image={gif3} text={t("slow_motion")} />,
      ]}
    />
  );
}

export default Output;
