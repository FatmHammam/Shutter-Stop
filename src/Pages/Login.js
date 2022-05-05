import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPhone, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Input from '../Components/Input';
import PageLayout from '../Components/PageLayout';
import flag from '../Images/flag.png';
import background from "../Images/bg3.png";
import arrowDown from '../Images/arrowDown.png';
import styles from './Login.module.scss';

function Login() {
  return (
    <PageLayout
      buttonText="Login"
      onButtonClick={() => { window.location = "/" }}
      background={background}
      header="Welcome Back!"
      buttonStyle={"78px"}
      footer={<div className={`text-center fs-6 pt-3 ${styles.font}`}>
        <span href="#">Forgot Password?</span>
        <a href="/reset-password" className={styles.loginLink}>Reset now</a>
      </div>}

      body={<div>
        <Input
          placeholder={"+2 XXXXXXXX"}
          leftIcon={<FontAwesomeIcon icon={faPhone} />}
          extraIcon={
            <>
              <img src={flag} className={styles.flag} />
              <img src={arrowDown} className={styles.arrowDown} />
            </>
          }
        />
        <Input
          placeholder={"Password"}
          leftIcon={<FontAwesomeIcon icon={faLock} />}
          rightIcon={<FontAwesomeIcon icon={faEyeSlash} />}
        />
      </div>
      }
    />
  );
}

export default Login;
