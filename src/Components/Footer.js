import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTwitter, faSnapchat, faTiktok } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.scss';
import nameImg from '../Images/nameImg.png'
import { faHome, faHandshake, faHandHoldingMedical, faRing, faUserGroup } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.others}>
                <img src={nameImg} alt="" />
                <div className={styles.links}>
                    <div className={styles.features}>
                        <FontAwesomeIcon icon={faHome} color={"#B13B6D"} />
                        <a>Home</a>
                    </div>
                    <div className={styles.features}>
                        <FontAwesomeIcon icon={faHandshake} color={"#B13B6D"} />
                        <a>Corporate</a>
                    </div>
                    <div className={styles.features}>
                        <FontAwesomeIcon icon={faHandHoldingMedical} color={"#B13B6D"} />
                        <a>Features</a>
                    </div>
                    <div className={styles.features}>
                        <FontAwesomeIcon icon={faRing} color={"#B13B6D"} />
                        <a>Wedding</a>
                    </div>
                    <div className={styles.features}>
                        <FontAwesomeIcon icon={faUserGroup} color={"#B13B6D"} />
                        <a>Social</a>
                    </div>
                    <div className={styles.features}>
                        <button >Reserve</button>
                    </div>
                </div>
            </div>
            <div> <hr className={styles.lineThrough} /></div>


            <div className={styles.circleContainer}>
                <div className={styles.circle}>
                    <FontAwesomeIcon icon={faFacebookF} color={"#672649"} />
                </div>
                <div className={styles.circle}>
                    <FontAwesomeIcon icon={faInstagram} color={"#672649"} />
                </div>
                <div className={styles.circle}>
                    <FontAwesomeIcon icon={faYoutube} color={"#672649"} />
                </div>
                <div className={styles.circle}>
                    <FontAwesomeIcon icon={faTwitter} color={"#672649"} />
                </div>
                <div className={styles.circle}>
                    <FontAwesomeIcon icon={faSnapchat} color={"#672649"} />
                </div>
                <div className={styles.circle}>
                    <FontAwesomeIcon icon={faTiktok} color={"#672649"} />
                </div>

            </div>
            <div className={styles.copyRights}>
                <p>All right reserved to PentaValue (C) 2021</p>
            </div>

        </div>
    );
}

export default Footer;