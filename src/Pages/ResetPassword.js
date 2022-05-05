import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Input from "../Components/Input";
import PageLayout from "../Components/PageLayout";
import background from "../Images/bg2.png";
import sideArrow from "../Images/sideArrow.svg";
import styles from "./ResetPassword.module.scss";

function ResetPassword() {
  const { t } = useTranslation();
  return (
    <PageLayout
      buttonStyle="140px"
      buttonText={t("save")}
      background={background}
      header={t("resetPassword")}
      onButtonClick={() => (window.location = "/")}
      sideArrow={
        <img
          src={sideArrow}
          className={styles.arrowDown}
          onClick={() => (window.location = "/login")}
        />
      }
      body={
        <div>
          <Input
            placeholder={t("password")}
            leftIcon={<FontAwesomeIcon icon={faLock} />}
            rightIcon={<FontAwesomeIcon icon={faEyeSlash} />}
          />
          <Input
            placeholder={t("confirmPassword")}
            leftIcon={<FontAwesomeIcon icon={faLock} />}
            rightIcon={<FontAwesomeIcon icon={faEyeSlash} />}
          />
        </div>
      }
    />
  );
}

export default ResetPassword;
