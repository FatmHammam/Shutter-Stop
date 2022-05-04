import styles from './PhotoSamples.module.scss'

function PhotoSample({ photo }) {
    return (
        <img src={photo} className={styles.photo} alt="" />
    );
}

export default PhotoSample;