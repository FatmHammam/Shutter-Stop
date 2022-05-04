import Template from "./Template";
import Header from "./Header";
import ProductsInfo from "./ProductsInfo";
import photoBooth from "../Images/photoBooth.png"
import adsScreen from "../Images/adsScreen.png";

function Products() {
  return (
    <Template
      header={
        <Header
          leftSpanwidth={"6%"}
          bgColor={"#6F4AB0"}
          color={"#6F4AB0"}
          title={"Our Products"}
          rightSpanWidth={"70%"}
        />}
      items={
        [
          <ProductsInfo
            photo={photoBooth}
            name={"Photobooth"}
            description={" Lorem ipsum, or lipsum as itor lipsum as it is sometimes known Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out prin graphic or web designs The passage is attributed to an unknown"}
          />,
          <ProductsInfo
            photo={adsScreen}
            name={"Ads Screen"}
            description={" Lorem ipsum, or lipsum as itor lipsum as it is sometimes known Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out prin graphic or web designs The passage is attributed to an unknown"}
          />,
          <ProductsInfo
            photo={photoBooth}
            name={"Entertainment Screen"}
            description={" Lorem ipsum, or lipsum as itor lipsum as it is sometimes known Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out prin graphic or web designs The passage is attributed to an unknown"}
          />,
          <ProductsInfo
            photo={photoBooth}
            name={"Entertainment Screen"}
            description={" Lorem ipsum, or lipsum as itor lipsum as it is sometimes known Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out prin graphic or web designs The passage is attributed to an unknown"}
          />,
        ]
      }
    />
  );
}

export default Products;