import styles from './HomePageHeader.module.scss';
import headerLogo from '../Images/headerLogo.png';

function HomePage() {
  return (
    <div className={styles.container}>
      <img src={headerLogo} />
      <div>
        <a href='#'>Home</a>
        <a href='#'>Rental</a>
        <a href='#'>featured</a>
        <button>Reserve</button>
        <a href='#'>عربي</a>
      </div>
    </div>
  );
}

export default HomePage;