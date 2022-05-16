import { useTranslation } from "react-i18next";
import Template from "./Template";
import Header from "./Header";
import ProductsInfo from "./ProductsInfo";
import AnimatedSquares from "./AnimatedSquares";
import photoBooth from "../Images/photoBooth.png";
import adsScreen from "../Images/adsScreen.png";
import small_squares_background from "../Images/small_squares_background.svg";

const lorem =
  "Lorem ipsum, or lipsum as itor lipsum as it is sometimes known Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out prin graphic or web designs The passage is attributed to an unknown";

function Products() {
  const { t } = useTranslation();
  return (
    <Template
      background={small_squares_background}
      itemsContainerStyle={{ marginTop: 50, paddingBottom: 250 }}
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
        <ProductsInfo name={t("ads")} photo={adsScreen} description={lorem} />,
        <ProductsInfo
          photo={photoBooth}
          description={lorem}
          name={t("entertainment")}
        />,
        <ProductsInfo
          photo={photoBooth}
          description={lorem}
          name={t("entertainment")}
        />,
      ]}
    />
  );
}

export default Products;
