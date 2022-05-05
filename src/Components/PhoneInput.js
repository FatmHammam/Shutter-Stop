import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import flag from "../Images/flag.png";
import arrowDown from "../Images/arrowDown.png";
import styles from "./PhoneInput.module.scss";

function PhoneInput() {
  const { t } = useTranslation();
  return (
    <Input
      placeholder={t("number")}
      leftIcon={<FontAwesomeIcon icon={faPhone} />}
      extraIcon={
        <>
          <img src={flag} className={styles.flag} />
          <img src={arrowDown} />
        </>
      }
    />
  );
}

export default PhoneInput;
