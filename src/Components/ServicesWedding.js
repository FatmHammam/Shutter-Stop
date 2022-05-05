import styles from './Template';
import Header from './Header';
import Template from './Template';
import wedding from '../Images/wedding.png';
import wedding2 from '../Images/wedding2.png';
import tree from '../Images/tree.png';
import ServicesDetails from './ServicesDetails';


function ServicesWedding1({ photo, name, description }) {

    return (
        <div>
            <Header
                leftSpanwidth={"40%"}
                color={"#6F4AB0"}
                title={"Services"}
                rightSpanWidth={"40%"}
            />
            <div className={styles.servicesLAyout}>
                <Template
                    items={
                        [
                            < ServicesDetails
                                photo={<img src={wedding} alt="" />}
                                name={<h2 className={styles.wedding}>Photos</h2>} />,
                            < ServicesDetails
                                photo={<img src={wedding2} alt="" />}
                                name={<h2 className={styles.birthdays}>Chroma</h2>} />,
                            < ServicesDetails
                                photo={<img src={tree} alt="" />}
                                name={<h2 className={styles.events}>Tree</h2>} />,
                        ]
                    }
                />
            </div>
        </div>
    );
}

export default ServicesWedding1;