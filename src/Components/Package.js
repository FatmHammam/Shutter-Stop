import styles from './Package.module.scss'

function Package({ photo, text, list }) {
  return (
    <div className={styles.container}>
      <img src={photo} alt="..." />
      <ul>
        {list.map(item => <li>{item}</li>)}
      </ul>
      <h3>{text}</h3>
    </div>
  );
}

export default Package;
