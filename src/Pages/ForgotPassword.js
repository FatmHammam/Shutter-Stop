import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Input from '../Components/Input';
import PageLayout from '../Components/PageLayout';
import flag from '../Images/flag.png';
import background from "../Images/bg2.png";
import arrowDown from '../Images/arrowDown.png';
import sideArrow from '../Images/sideArrow.svg';
import styles from './ForgotPassword.module.scss';

function ForgotPassword() {
  return (
    <PageLayout
      background={background}
      buttonStyle={"150px"}
      header="Forgot password"
      sideArrow={<img src={sideArrow} className={styles.arrowDown} />}
      buttonText="Send Request"
      body={
        <Input
          placeholder={"+2  XXXXXXXX"}
          leftIcon={<FontAwesomeIcon icon={faPhone} />}
          extraIcon={
            <>
              <img src={flag} className={styles.flag} />
              <img src={arrowDown} className={styles.arrowDown} />
            </>
          }
        />}
    />
  );
}

export default ForgotPassword;