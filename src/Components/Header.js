import styles from "./Header.module.scss";

function Header({ title, bgColor, color, centered = true }) {
  return (
    <div className={styles.header}>
      <span
        className={styles.border}
        style={{ backgroundColor: `${bgColor}` }}
      />
      <p style={{ color: `${color}` }}>{title}</p>
      <span
        className={styles.border}
        style={{ backgroundColor: `${bgColor}`, flex: centered ? 1 : 10 }}
      />
    </div>
  );
}

export default Header;
