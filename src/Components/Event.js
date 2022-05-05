import { useTranslation } from "react-i18next";
import styles from "./Event.module.scss";

function Event({ img, title, containerStyle, bgcolor, color }) {
  const { t } = useTranslation();
  return (
    <div className={styles.container} style={containerStyle}>
      <div className={styles.eventDetails} style={{ backgroundColor: bgcolor }}>
        <img src={img} />
        <div className={styles.details}>
          <h1>{title}</h1>
          <hr></hr>
          <p>{t("reserve_description")}</p>
          <button style={{ color: color }}>{t("reserve_now")}</button>
        </div>
      </div>
    </div>
  );
}

export default Event;
