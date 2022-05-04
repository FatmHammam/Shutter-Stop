import Template from "./Template";
import PackageSample from "./PackageSample";
import Header from "./Header";
import p1 from '../Images/p1.png';
import p2 from '../Images/p2.png';
import p3 from '../Images/p3.png';
import styles from './PackagesWedding1.module.scss'


function PackagesWedding1() {
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
                                <p> Prints</p>
                                <p> Photos </p>
                                <p>GIFS </p>
                                <p> Backdrops </p>
                                <p>Text and email sharing </p>
                            </div>
                        </div>
                    }
                    />,
                    <PackageSample item={
                        <div className={styles.packageLayout}>
                            <img src={p2} alt="" className={styles.packageImage} />
                            <div className={styles.packageName}>
                                <p>Mosaic wall </p>
                                <p> Frames</p>
                                <p> Filters</p>
                                <p>Photos </p>
                                <p> GIFS</p>
                                <p> Prints</p>
                                <p> Backdrops</p>
                                <p> Text and email sharing</p>
                            </div>
                        </div>}
                    />,

                    <PackageSample item={
                        <div className={styles.packageLayout}>
                            <img src={p3} alt="" className={styles.packageImage} />
                            <div className={styles.packageName}>
                                <p>Augmented Reality </p>
                                <p> Mosaic wall</p>
                                <p>Frames </p>
                                <p>Filters </p>
                                <p>Photos </p>
                                <p>GIFS </p>
                                <p> Prints </p>
                                <p> Backdrops</p>
                                <p>Text and email sharing </p>
                            </div>
                        </div>}

                    />
                ]
            }
        />
    );
}

export default PackagesWedding1;


