import styles from './ClientsLogos.module.scss';

function ClientsLogos({ photo }) {
    return (
        <div className={styles.container}>
            <img src={photo} alt="" />
        </div>
    );
}

export default ClientsLogos;