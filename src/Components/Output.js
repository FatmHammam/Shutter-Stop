import Template from "./Template";
import Gifs from "./Gifs";
import gif1 from '../Images/gif1.png';
import gif2 from '../Images/gif2.png';
import gif3 from '../Images/gif3.png';
import Header from "./Header";
import styles from "./Output.module.scss";


function Output() {
  return (
    <Template
      header={
        <Header
          leftSpanwidth={"8%"}
          bgColor={"#C65FAA"}
          color={"#C65FAA"}
          title={"Output"}
          rightSpanWidth={"78%"}
        />}

      items={
        [
          <Gifs 
            item1={<img src={gif1} className={styles.gifs} alt="" />}
            item2={<h2 className={styles.gifTitle}>FIFs</h2>}
          />,
          <Gifs
            item1={<img src={gif2} className={styles.gifs} alt="" />}
            item2={<h2 className={styles.gifTitle}>3D IMAGES</h2>}
          />,
          <Gifs
            item1={<img src={gif3} className={styles.gifs} alt="" />}
            item2={<h2 className={styles.gifTitle}>SLOW MOTION</h2>}
          />
        ]
      }
    />
  );
}

export default Output;

