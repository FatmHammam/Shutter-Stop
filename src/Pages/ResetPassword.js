import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Input from "../Components/Input";
import PageLayout from "../Components/PageLayout";
import background from "../Images/bg2.png";
import sideArrow from "../Images/sideArrow.svg";
import styles from "./ResetPassword.module.scss";

function ResetPassword() {
  return (
    <PageLayout
      background={background}
      buttonText="Save"
      onButtonClick={() => {
        window.location = "/";
      }}
      sideArrow={
        <img
          src={sideArrow}
          className={styles.arrowDown}
          onClick={() => {
            window.location = "/login";
          }}
        />
      }
      buttonStyle={"140px"}
      header="Reset Password"
      body={
        <div>
          <Input
            placeholder={"Password"}
            leftIcon={<FontAwesomeIcon icon={faLock} />}
            rightIcon={<FontAwesomeIcon icon={faEyeSlash} />}
          />
          <Input
            placeholder={"Confirm Password"}
            leftIcon={<FontAwesomeIcon icon={faLock} />}
            rightIcon={<FontAwesomeIcon icon={faEyeSlash} />}
          />
        </div>
      }
    />
  );
}

export default ResetPassword;
