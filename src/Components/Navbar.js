import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Nav, Navbar, Container } from "react-bootstrap";
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
    <Navbar expand="md" fixed="top" className={styles.container}>
      <Container>
        <Navbar.Brand href="/" style={{padding: 0}}>
          <img src={headerLogo} className={styles.logo} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className={styles.nav}>
            <Nav.Link href="/">{t("home")}</Nav.Link>
            <Nav.Link href="/">{t("rental")}</Nav.Link>
            <Nav.Link href="/">{t("featured")}</Nav.Link>
            <button className={styles.button}>{t("reserve")}</button>
            <Nav.Link href="/">{t("ar")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomePage;
