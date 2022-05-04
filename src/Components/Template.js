import styles from './Template.module.scss';

function Template({ header, items, itemStyle = { width: '25%' }, itemWidth = "25%" }) {
  return (
    <div className={styles.container}>
      {header}
      <div className={styles.itemsContainer}>
        {
          items.map(function (element, idx) {
            return (
              <div
                key={idx}
                style={itemStyle}
                className={styles.item}
              >
                {element}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Template;
