import { useTranslation } from "react-i18next";
import boothIcon from "../Images/boothIcon.png";
import servayIcon from "../Images/servayIcon.png";
import streamIcon from "../Images/streamIcon.png";
import spinIcon from "../Images/spinIcon.png";
import vedioIcon from "../Images/vedioIcon.png";
import adsIcon from "../Images/adsIcon.png";
import styles from "./CoreFeatures.module.scss";

function CoreFeatures() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{t("core_features")}</h1>
        <p>{t("core_features_description")}</p>
      </div>
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureContainer}>
            <img src={boothIcon} />
          </div>
          <h4>{t("photobooth")}</h4>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureContainer}>
            <img src={servayIcon} />
          </div>
          <h4>{t("smart_survey")}</h4>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureContainer}>
            <img src={streamIcon} />
          </div>
          <h4>{t("live_streaming")}</h4>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureContainer}>
            <img src={spinIcon} />
          </div>
          <h4>{t("spin_and_win")}</h4>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureContainer}>
            <img src={adsIcon} />
          </div>
          <h4>{t("interactive_ads")}</h4>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureContainer}>
            <img src={vedioIcon} />
          </div>
          <h4>{t("interactive_videos")}</h4>
        </div>
      </div>
    </div>
  );
}

export default CoreFeatures;
