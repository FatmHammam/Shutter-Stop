import styles from './Gifs.module.scss';

function Gifs({ item1, item2 }) {

    return (
        <div className={styles.output}>
            {item1}
            {item2}
        </div>
    );
}

export default Gifs;