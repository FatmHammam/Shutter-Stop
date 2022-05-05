import { useTranslation } from "react-i18next";
import Header from "./Header";
import Template from "./Template";
import ServicesDetails from "./ServicesDetails";
import wedding from "../Images/wedding.png";
import birthdays from "../Images/birthdays.png";
import event from "../Images/event.png";
import squares_background from "../Images/squares_background.svg";

function ServicesHomePage() {
  const { t } = useTranslation();
  return (
    <div>
      <Header title={t("services")} color="#6F4AB0" />
      <Template
        background={squares_background}
        itemStyle={{ flex: 1, padding: "0 30px" }}
        items={[
          <ServicesDetails photo={wedding} text={t("weddings")} />,
          <ServicesDetails photo={birthdays} text={t("birthdays")} />,
          <ServicesDetails photo={event} text={t("events")} />,
        ]}
      />
    </div>
  );
}

export default ServicesHomePage;
