import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import PageLayout from "../Components/PageLayout";
import Input from "../Components/Input";
import flag from "../Images/flag.png";
import background from "../Images/bg.png";
import arrowDown from "../Images/arrowDown.png";
import styles from "./SignUp.module.scss";

function SignUp() {
  const { t } = useTranslation();
  return (
    <PageLayout
      background={background}
      header={t("getAccount")}
      buttonStyle="140px"
      buttonText={t("signup")}
      onButtonClick={() => (window.location = "/verify-code")}
      body={
        <Input
          placeholder={t("number")}
          leftIcon={<FontAwesomeIcon icon={faPhone} />}
          extraIcon={
            <>
              <img src={flag} className={styles.flag} />
              <img src={arrowDown} className={styles.arrowDown} />
            </>
          }
        />
      }
      footer={
        <div className={`text-center fs-6 pt-3 ${styles.font}`}>
          <span>{t("haveAccount")}</span>
          <a href="/login" className={styles.loginLink}>
            {t("log_in")}
          </a>
        </div>
      }
    />
  );
}

export default SignUp;
