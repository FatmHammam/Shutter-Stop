import styles from "./ProductsInfo.module.scss";

function ProductsInfo({ photo, name, description }) {
  return (
    <div
      className={styles.container}
      onClick={() => (window.location = "/products")}
    >
      <div style={{ position: "relative" }}>
        <img src={photo} style={{ width: "100%" }} />
        <h3 className={styles.name}>{name}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default ProductsInfo;
