import { useTranslation } from "react-i18next";
import headerLogo from '../Images/headerLogo.png';
import styles from './Navbar.module.scss';

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <img src={headerLogo} />
      <div>
        <a href='/'>{t("home")}</a>
        <a href='/'>{t("rental")}</a>
        <a href='/'>{t("featured")}</a>
        <button>{t("reserve")}</button>
        <a href='#'>{t("ar")}</a>
      </div>
    </div>
  );
}

export default HomePage;