import styles from "./AnimatedSquares.module.scss";

function AnimatedSquares({style}) {
  return (
    <div className={styles.container} style={style}>
      <div className={styles.square} />
      <div className={styles.anotherSquare} />
    </div>
  );
}

export default AnimatedSquares;
