import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import AnimatedSquares from "./AnimatedSquares";
import styles from "./ReservationForm.module.scss";

function ReservationForm() {
  const { t } = useTranslation();
  return (
    <Container className={styles.container}>
      <AnimatedSquares style={{ top: 100, right: 100 }} />
      <AnimatedSquares style={{ top: 100, right: 550, transform: "rotate(-30deg) scale(1.6)" }} />
      <AnimatedSquares style={{ top: 500, right: 100, transform: "rotate(60deg) scale(2.5)" }} />
      <AnimatedSquares style={{ bottom: 150, right: 400, transform: "rotate(-50deg) scale(2.5)" }} />
      <form>
        <h1 className={styles.title}>{t("for_reservation")}</h1>
        <input placeholder={t("name")} className={styles.input} />
        <input placeholder={t("email")} className={styles.input} />
        <input placeholder={t("phone")} className={styles.input} />
        <input placeholder={t("date")} className={styles.input} />
        <input placeholder={t("address")} className={styles.input} />
        <input placeholder={t("package")} className={styles.input} />
        <textarea placeholder={t("note")} className={styles.textArea} />
      </form>
      <button className={styles.button}>{t("send")}</button>
    </Container>
  );
}

export default ReservationForm;
