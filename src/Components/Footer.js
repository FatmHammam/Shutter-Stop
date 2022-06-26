import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "../Images/logo.png";
import styles from "./Footer.module.scss";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={`container ${styles.others}`}>
        <img src={logo} alt="" />
        <div className={styles.links}>
          <div className={styles.features}>
            <a>{t("home")}</a>
          </div>
          <div className={styles.features}>
            <a>{t("corporate")}</a>
          </div>
          <div className={styles.features}>
            <a>{t("features")}</a>
          </div>
          <div className={styles.features}>
            <a>{t("wedding")}</a>
          </div>
          <div className={styles.features}>
            <a>{t("social")}</a>
          </div>
        </div>
        <div className={styles.icons}>
          <div className={styles.circleContainer}>
            <div className={styles.circle1}>
              <FontAwesomeIcon icon={faFacebookF} color={"#221639"} />
            </div>
          </div>
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} size="2x" />
        </div>
        <div className={styles.features}>
          <button>{t("reserve")}</button>
        </div>
      </div>


      <div className={styles.copyRights}>
        <p>
          {t("right_reserved_left")}
          <a href="https://pentavalue.com/en" target="_blank">
            {t("right_reserved_company_name")}
          </a>
          {t("right_reserved_right")}
        </p>
      </div>
    </div>
  );
}

export default Footer;
