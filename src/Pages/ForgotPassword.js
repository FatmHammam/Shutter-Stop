import { useTranslation } from "react-i18next";
import PageLayout from "../Components/PageLayout";
import PhoneInput from "../Components/PhoneInput";
import background from "../Images/bg2.png";
import sideArrow from "../Images/sideArrow.svg";

function ForgotPassword() {
  const { t } = useTranslation();
  return (
    <PageLayout
      background={background}
      header={t("forgotPassword")}
      body={<PhoneInput />}
      sideArrow={<img src={sideArrow} />}
      buttonStyle="150px"
      buttonText={t("sendRequest")}
    />
  );
}

export default ForgotPassword;
