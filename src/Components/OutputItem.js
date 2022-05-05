import styles from "./OutputItem.module.scss";

function OutputItem({ image, text }) {
  return (
    <div className={styles.container}>
      <img src={image} alt="..." />
      <h2>{text}</h2>
    </div>
  );
}

export default OutputItem;
