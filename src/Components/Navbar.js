import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import headerLogo from "../Images/headerLogo.png";
import styles from "./Navbar.module.scss";

function HomePage() {
  const { t } = useTranslation();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${styles.container} ${offset > 500 && styles.active}`}>
      <img src={headerLogo} />
      <div>
        <a href="/">{t("home")}</a>
        <a href="/">{t("rental")}</a>
        <a href="/">{t("featured")}</a>
        <button>{t("reserve")}</button>
        <a href="#">{t("ar")}</a>
      </div>
    </div>
  );
}

export default HomePage;
