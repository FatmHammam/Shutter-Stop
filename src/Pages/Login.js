import PageLayout from '../Components/PageLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import flag from '../Images/flag.png'
import background from "../Images/bg.png";

function Login() {
  return (
    <PageLayout
      buttonText="Signup"
      background={background}
      header="Get your own account"
      body={<div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text d-flex justify-content-center align-items-center h-100 bg" id="basic-addon1">
            <FontAwesomeIcon icon={faPhone} />
          </span>
        </div>
        <div className="input-group-prepend">
          <span className="input-group-text d-flex justify-content-center align-items-center h-100 bg" id="basic-addon1">
            <img src={flag} />
          </span>
        </div>

        <input type="text" className="form-control" placeholder="+2  XXXXXXXXX" aria-label="Username" aria-describedby="basic-addon1" />
      </div>}
    />
  );
}

export default Login;