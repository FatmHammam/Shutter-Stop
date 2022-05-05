import { useTranslation } from "react-i18next";
import PageLayout from "../Components/PageLayout";
import PhoneInput from "../Components/PhoneInput";
import background from "../Images/bg.png";
import styles from "./SignUp.module.scss";

function SignUp() {
  const { t } = useTranslation();
  return (
    <PageLayout
      background={background}
      header={t("getAccount")}
      body={<PhoneInput />}
      buttonStyle="140px"
      buttonText={t("signup")}
      onButtonClick={() => (window.location = "/verify-code")}
      footer={
        <div className={styles.link}>
          <span>{t("haveAccount")}</span>
          <a href="/login">{t("log_in")}</a>
        </div>
      }
    />
  );
}

export default SignUp;
