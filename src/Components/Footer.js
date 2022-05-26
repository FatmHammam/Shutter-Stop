import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faHandshake,
  faHandHoldingMedical,
  faRing,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import nameImg from "../Images/nameImg.png";
import styles from "./Footer.module.scss";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={`container ${styles.others}`}>
        <img src={nameImg} alt="" />
        <div className={styles.links}>
          <div className={styles.features}>
            <FontAwesomeIcon icon={faHome} color="#B13B6D" />
            <a>{t("home")}</a>
          </div>
          <div className={styles.features}>
            <FontAwesomeIcon icon={faHandshake} color="#B13B6D" />
            <a>{t("corporate")}</a>
          </div>
          <div className={styles.features}>
            <FontAwesomeIcon icon={faHandHoldingMedical} color="#B13B6D" />
            <a>{t("features")}</a>
          </div>
          <div className={styles.features}>
            <FontAwesomeIcon icon={faRing} color="#B13B6D" />
            <a>{t("wedding")}</a>
          </div>
          <div className={styles.features}>
            <FontAwesomeIcon icon={faUserGroup} color="#B13B6D" />
            <a>{t("social")}</a>
          </div>
          <div className={styles.features}>
            <button>{t("reserve")}</button>
          </div>
        </div>
      </div>

      <hr className={styles.lineThrough} />

      <div className={styles.circleContainer}>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faFacebookF} color={"#672649"} />
        </div>
        <div className={styles.circle}>
          <FontAwesomeIcon icon={faInstagram} color={"#672649"} />
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
