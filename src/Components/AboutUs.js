import { useTranslation } from "react-i18next";
import logo from "../Images/logo.png";
import styles from "./AboutUs.module.scss";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.color_container}>
          <img src={logo} alt="" />
          <div>
            <h3>{t("about")}</h3>
            <p>{t("about_description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
