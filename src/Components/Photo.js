import styles from "./Photo.module.scss";

function Photo({ src }) {
  return <img src={src} alt="..." className={styles.photo} />;
}

export default Photo;
