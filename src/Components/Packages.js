import Template from "./Template";
import PackageSample from "./PackageSample";
import Header from "./Header";
import p1 from '../Images/p1.png';
import p2 from '../Images/p2.png';
import p3 from '../Images/p3.png';
import styles from './Packages.module.scss'


function Packages() {
    return (
        <Template
            header={
                <Header
                    leftSpanwidth={"38%"}
                    bgColor={"#fff"}
                    color={"#672649"}
                    title={"Our Packages"}
                    rightSpanWidth={"38%"}
                />}

            items={
                [
                    <PackageSample item={
                        <div className={styles.packageLayout}>
                            <img src={p1} alt="" className={styles.packageImage} />
                            <div className={styles.packageName}>
                                <h3>SILVER PACKAGE</h3>
                            </div>
                        </div>
                    }
                    />,
                    <PackageSample item={
                        <div className={styles.packageLayout}>
                            <img src={p2} alt="" className={styles.packageImage} />
                            <div className={styles.packageName}>
                                <h3>GOLDEN PACKAGE</h3>
                            </div>
                        </div>}
                    />,

                    <PackageSample item={
                        <div className={styles.packageLayout}>
                            <img src={p3} alt="" className={styles.packageImage} />
                            <div className={styles.packageName}>
                                <h3>PLATINUM PACKAGE</h3>
                            </div>
                        </div>}

                    />
                ]
            }
        />
    );
}

export default Packages;


