import styles from "./Template.module.scss";

function Template({
  items,
  header,
  background,
  itemsContainerStyle,
  itemStyle = { width: "25%" },
}) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${background})` }}
    >
      {header}
      <div className={styles.itemsContainer} style={itemsContainerStyle}>
        {items.map(function (element, idx) {
          return (
            <div key={idx} style={itemStyle} className={styles.item}>
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Template;
