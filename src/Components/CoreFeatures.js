import styles from './CoreFeatures.module.scss';
import boothIcon from '../Images/boothIcon.png'
import servayIcon from '../Images/servayIcon.png'
import streamIcon from '../Images/streamIcon.png'
import spinIcon from '../Images/spinIcon.png'
import vedioIcon from '../Images/vedioIcon.png'
import adsIcon from '../Images/adsIcon.png'

function CoreFeatures() {

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Core Features.</h1>
                <p>Best features with the latest technologies</p>
            </div>
            <div className={styles.features}>
                <div className={styles.feature}>
                    <div className={styles.featureContainer}>
                        <img src={boothIcon} />
                    </div>
                    <h4>PhotoBooth</h4>
                </div>
                <div className={styles.feature}>
                    <div className={styles.featureContainer}>
                    <img src={servayIcon} />
                    </div>
                    <h4>Smart Survey</h4>
                </div>
                <div className={styles.feature}>
                    <div className={styles.featureContainer}>
                    <img src={streamIcon} />
                    </div>
                    <h4>Live streaming</h4>
                </div>
                <div className={styles.feature}>
                    <div className={styles.featureContainer}>
                    <img src={spinIcon} />
                    </div>
                    <h5>Spin and win</h5>
                </div>
                <div className={styles.feature}>
                    <div className={styles.featureContainer}>
                    <img src={adsIcon} />
                    </div>
                    <h5>Interactive ads</h5>
                </div>
                <div className={styles.feature}>
                    <div className={styles.featureContainer}>
                    <img src={vedioIcon} />
                    </div>
                    <h5>Interactive vedios</h5>
                </div>
            </div>
        </div>
    );
}

export default CoreFeatures;