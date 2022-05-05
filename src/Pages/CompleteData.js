import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEyeSlash,
  faUserLarge,
} from "@fortawesome/free-solid-svg-icons";
import Input from "../Components/Input";
import PageLayout from "../Components/PageLayout";
import background from "../Images/bg.png";

function CompleteData() {
  const { t } = useTranslation();
  return (
    <PageLayout
      background={background}
      header={t("completeData")}
      buttonStyle="60px"
      buttonText={t("save")}
      onButtonClick={() => (window.location = "/")}
      body={
        <div>
          <Input
            placeholder={t("username")}
            leftIcon={<FontAwesomeIcon icon={faUserLarge} />}
          />
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

export default CompleteData;
