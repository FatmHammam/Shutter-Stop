
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import PageLayout from '../Components/PageLayout';
import Input from '../Components/Input';
import flag from '../Images/flag.png';
import background from "../Images/bg.png";
import arrowDown from '../Images/arrowDown.png';
import styles from './SignUp.module.scss';

function SignUp() {
  return (
    <PageLayout
      buttonText="Signup"
      background={background}
      header="Get your own account"
      onButtonClick={() => { window.location = "/verify-code" }}
      body={
        <Input
          placeholder={"+2 XXXXXXXX"}
          leftIcon={<FontAwesomeIcon icon={faPhone} />}
          extraIcon={
            <>
              <img src={flag} className={styles.flag} />
              <img src={arrowDown} className={styles.arrowDown} />
            </>
          }
        />}
      buttonStyle={"140px"}
      footer={<div className="text-center fs-6 pt-3">
        <span href="#">You have an account?</span>
        <a href="/login" className={styles.loginLink}>Log in</a>
      </div>}
    />
  );
}

export default SignUp;
