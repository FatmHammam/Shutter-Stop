import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Input from "../Components/Input";
import PageLayout from "../Components/PageLayout";
import PhoneInput from "../Components/PhoneInput";
import background from "../Images/bg3.png";
import styles from "./Login.module.scss";

function Login() {
  const { t } = useTranslation();
  return (
    <PageLayout
      header={t("welcome")}
      background={background}
      buttonStyle={"78px"}
      buttonText={t("login")}
      onButtonClick={() => (window.location = "/")}
      footer={
        <div className={styles.link}>
          <span href="#">{t("forgot")}</span>
          <a href="/reset-password">{t("reset")}</a>
        </div>
      }
      body={
        <div>
          <PhoneInput />
          <Input
            placeholder={t("password")}
            leftIcon={<FontAwesomeIcon icon={faLock} />}
            rightIcon={<FontAwesomeIcon icon={faEyeSlash} />}
          />
        </div>
      }
    />
  );
}

export default Login;
