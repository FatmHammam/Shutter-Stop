import { useTranslation } from "react-i18next";
import Template from "./Template";
import Header from "./Header";
import ProductsInfo from "./ProductsInfo";
import AnimatedSquares from "./AnimatedSquares";
import photoBooth from "../Images/photoBooth.png";
import adsScreen from "../Images/adsScreen.png";

const lorem =
  "Lorem ipsum, or lipsum as itor lipsum as it is sometimes known Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out prin graphic or web designs The passage is attributed to an unknown";

function Products() {
  const { t } = useTranslation();
  return (
    <>
      <Template
        itemsContainerStyle={{ marginTop: 80, marginBottom: 50 }}
        itemStyle={{
          width:
            window.innerWidth > 992
              ? "25%"
              : window.innerWidth > 768
              ? "50%"
              : "100%",
        }}
        header={
          <>
            <AnimatedSquares />
            <AnimatedSquares style={{ top: 100, left: 50 }} />
            <AnimatedSquares style={{ top: 300, right: 0 }} />
            <AnimatedSquares
              style={{ bottom: -30, right: 50, transform: "scale(1.6)" }}
            />
            <Header
              centered={false}
              color="#6F4AB0"
              bgColor="#6F4AB0"
              title={t("our_products")}
            />
          </>
        }
        items={[
          <ProductsInfo
            photo={photoBooth}
            description={lorem}
            name={t("photobooth")}
          />,
          <ProductsInfo
            name={t("ads")}
            photo={adsScreen}
            description={lorem}
          />,
          <ProductsInfo
            photo={photoBooth}
            description={lorem}
            name={t("weddingScreen")}
          />,
          <ProductsInfo
            photo={photoBooth}
            description={lorem}
            name={t("restaurants")}
          />,
        ]}
      />
      <p
        style={{
          width: "90%",
          fontSize: 25,
          color: "#555",
          margin: "auto",
          fontWeight: 500,
          marginBottom: 50,
          fontFamily: "Roboto",
        }}
      >
        {t("custom_left")}
        <a
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => (window.location = "/products")}
        >
          {t("custom_click_here")}
        </a>
        {t("custom_right")}
      </p>
    </>
  );
}

export default Products;
