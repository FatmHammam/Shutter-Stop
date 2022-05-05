import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import styles from "./ReservationForm.module.scss";

function ReservationForm() {
  const { t } = useTranslation();
  return (
    <Container className={styles.container}>
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
