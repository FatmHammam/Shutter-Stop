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
  return (
    <PageLayout
      background={background}
      buttonText="Save"
      buttonStyle={"60px"}
      onButtonClick={() => {
        window.location = "/";
      }}
      header="Complete your data"
      body={
        <div>
          <Input
            placeholder={"User Name"}
            leftIcon={<FontAwesomeIcon icon={faUserLarge} />}
          />
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

export default CompleteData;
