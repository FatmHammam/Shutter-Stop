import { useTranslation } from "react-i18next";
import Header from "./Header";
import Template from "./Template";
import ServicesDetails from "./ServicesDetails";
import squares_background from "../Images/squares_background.svg";

function ServicesSlider({ items }) {
  const { t } = useTranslation();
  return (
    <div className="container">
      <Header title={t("services")} color="#6F4AB0" />
      <Template
        background={squares_background}
        itemsContainerStyle={{
          marginTop: 100,
          marginBottom: 100,
          flexDirection: window.innerWidth > 992 ? "row" : "column",
        }}
        itemStyle={{ flex: 1, padding: "0 30px" }}
        items={items.map((item, index) => (
          <ServicesDetails key={index} {...item} />
        ))}
      />
    </div>
  );
}

export default ServicesSlider;
