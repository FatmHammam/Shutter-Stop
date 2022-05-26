import styles from "./ServicesDetails.module.scss";

function ServicesDetails({ photo, text }) {
  return (
    <div
      className={styles.container}
      onClick={() => (window.location = "/services")}
    >
      <img src={photo} alt="" />
      <h2>{text}</h2>
    </div>
  );
}

export default ServicesDetails;
