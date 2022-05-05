import styles from './Package.module.scss'

function Package({ photo, text }) {
  return (
    <div className={styles.container}>
      <img src={photo} alt="..." />
      <h3>{text}</h3>
    </div>
  );
}

export default Package;
