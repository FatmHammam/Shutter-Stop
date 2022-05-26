import { useTranslation } from "react-i18next";
import Template from "./Template";
import Header from "./Header";
import Package from "./Package";
import AnimatedSquares from "./AnimatedSquares";
import p1 from "../Images/p1.png";
import p2 from "../Images/p2.png";
import p3 from "../Images/p3.png";

function Packages() {
  const { t } = useTranslation();

  const packages = [
    {
      photo: p1,
      text: t("sliver_package"),
      list: ["Prints", "Photos", "GIFS", "Backdrops", "Text and email sharing"],
    },
    {
      photo: p2,
      text: t("chroma"),
      list: [
        "Mosaic wall",
        "Frames",
        "Filters",
        "Photos",
        "GIFS",
        "Prints",
        "Backdrops",
        "Text and email sharing",
      ],
    },
    {
      photo: p3,
      text: t("tree"),
      list: [
        "Augmented Reality",
        "Mosaic wall",
        "Frames",
        "Filters",
        "Photos",
        "GIFS",
        "Prints",
        "Backdrops",
        "Text and email sharing",
      ],
    },
  ];

  return (
    <Template
      itemStyle={{
        width: `${100 / (window.innerWidth > 992 ? 3 : 1)}%`,
        padding: "0 30px",
        marginTop: 50,
      }}
      itemsContainerStyle={{ marginBottom: 200 }}
      header={
        <>
          <AnimatedSquares />
          <Header bgColor="#fff" color="#672649" title={t("our_packages")} />
        </>
      }
      items={packages.map((item, index) => (
        <Package key={index} {...item} />
      ))}
    />
  );
}

export default Packages;
