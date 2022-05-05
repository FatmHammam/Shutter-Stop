import { useTranslation } from "react-i18next";
import PageLayout from "../Components/PageLayout";
import background from "../Images/bg2.png";
import icon from "../Images/icon.png";
import sideArrow from "../Images/sideArrow.svg";
import styles from "./VerifyCode.module.scss";

function VerifyCode() {
  const { t } = useTranslation();

  function Input() {
    return <input placeholder="X" className={styles.input} />;
  }

  return (
    <PageLayout
      background={background}
      header={t("verifyNumber")}
      buttonStyle="80px"
      buttonText={t("verify")}
      onButtonClick={() => (window.location = "/complete-data")}
      sideArrow={<img src={sideArrow} className={styles.arrowDown} />}
      body={
        <div>
          <p className={styles.font}>{t("code")}</p>

          <div className="d-flex flex-row" style={{ height: 100 }}>
            <Input />
            <Input />
            <Input />
            <Input />
          </div>

          <div className={styles.guidLine}>
            <p>{t("findCode")}</p>
            <div className={styles.resendLink}>
              <img src={icon} />
              <a className={styles.resend}>{t("sendAgain")}</a>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default VerifyCode;
