import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faPhone, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Input from "../Components/Input";
import PageLayout from "../Components/PageLayout";
import flag from "../Images/flag.png";
import background from "../Images/bg3.png";
import arrowDown from "../Images/arrowDown.png";
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
        <div className={`text-center fs-6 pt-3 ${styles.font}`}>
          <span href="#">{t("forgot")}</span>
          <a href="/reset-password" className={styles.loginLink}>
            {t("reset")}
          </a>
        </div>
      }
      body={
        <div>
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
