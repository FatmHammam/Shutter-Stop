import styles from './AboutUs.module.scss';
import logo from '../Images/logo.png';

function AboutUs() {
    return (
        <div className={styles.container}>
            <img src={logo} alt="" />
            <div>
                <h3>About</h3>
                <p>
                    Most people like the idea of a Photo Booth for their upcoming events because it is fun and entertaining,
                    but they always think all photo booth are the same – Stand in front of the machine, snap a photo and grab a print.
                    Shutter Stop simplified the process of printing and sharing photo booth’s photos to social media instantly. It makes
                    the photo booths connected, interactive and creates a marvelous photo experience. Shutter Stop has years of experience in
                    running photo booth related businesses. We understand the photo booth industry and how to make it better for the customers.
                    For corporate solutions, Shutter Stop further turns a standalone selfie machine into a powerful engagement and marketing tool.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;