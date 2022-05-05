import { useTranslation } from "react-i18next";
import Template from "./Template";
import Header from "./Header";
import Package from "./Package";
import p1 from "../Images/p1.png";
import p2 from "../Images/p2.png";
import p3 from "../Images/p3.png";
import small_squares_background from "../Images/small_squares_background.svg";

function Packages() {
  const { t } = useTranslation();

  const packages = [
    { photo: p1, text: t("sliver_package") },
    { photo: p2, text: t("chroma") },
    { photo: p3, text: t("tree") },
  ];

  return (
    <Template
      background={small_squares_background}
      itemStyle={{ width: `${100 / 3}%`, padding: '0 30px', marginTop: 50 }}
      itemsContainerStyle={{ marginBottom: 200 }}
      header={
        <Header bgColor="#fff" color="#672649" title={t("our_packages")} />
      }
      items={packages.map((item, index) => (
        <Package key={index} {...item} />
      ))}
    />
  );
}

export default Packages;
