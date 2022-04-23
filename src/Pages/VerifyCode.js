import PageLayout from '../Components/PageLayout';
import background from "../Images/bg2.png";
import icon from '../Images/icon.png';
import sideArrow from '../Images/sideArrow.svg';
import styles from './VerifyCode.module.scss';

function VerifyCode() {
    return (
        <PageLayout
            background={background}
            buttonText="Verify"
            sideArrow={<img src={sideArrow} className={styles.arrowDown} />}
            buttonStyle={"80px"}
            onButtonClick={() => { window.location = "/complete-data" }}
            header="Verify Your Number"

            body={<div>
                <p>Code</p>

                <div className="d-flex flex-row" >
                    <textarea className="m-1 text-center form-control rounded" placeholder={'X'}
                        style={{ resize: "none" }}></textarea>
                    <textarea className="m-1 text-center form-control rounded" placeholder={'X'}
                        style={{ resize: "none" }}></textarea>
                    <textarea className="m-1 text-center form-control rounded" placeholder={'X'}
                        style={{ resize: "none" }}></textarea>
                    <textarea className="m-1 text-center form-control rounded" placeholder={'X'}
                        style={{ resize: "none" }}></textarea>
                </div>

                <div className={styles.guidLine}>
                    <p>You can find the code in your SMS</p>
                    <div className={styles.resendLink}>
                        <img src={icon} />
                        <a className={styles.resend}>SEND AGAIN?</a>
                    </div>
                </div>
            </div>
            }
        />
    );
}

export default VerifyCode;
