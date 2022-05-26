import { useTranslation } from "react-i18next";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../Images/logo.png";
import styles from "./Navbar.module.scss";

function HomePage() {
  const { t } = useTranslation();

  return (
    <Navbar expand="md" fixed="top" className={styles.container}>
      <Container>
        <Navbar.Brand href="/" style={{padding: 0}}>
          <img src={logo} className={styles.logo} />
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
