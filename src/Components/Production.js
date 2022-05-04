import styles from './EventsAndProducts.module.scss';
import pro from '../Images/pro.png';
import EventsAndProducts from './EventAndProducts';



function Production() {

    return (
        <div>
            <EventsAndProducts
                img={pro}
                title={"PRODUCTS"}
                bgcolor={"#7B5EAC"}
                color={"#6F4AB0"} />
        </div>
    );
}

export default Production;