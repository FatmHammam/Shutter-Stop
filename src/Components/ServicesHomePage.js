import Header from "./Header";
import Template from "./Template";
import ServicesDetails from "./ServicesDetails";
import wedding from "../Images/wedding.png";
import birthdays from "../Images/birthdays.png";
import event from "../Images/event.png";
import styles from "./ServicesHomePage.module.scss";

function ServicesHomePage() {
  return (
    <div>
      <Header title="Services" color="#6F4AB0" />
      <div className={styles.background}>
        <Template
          itemStyle={{ flex: 1, padding: "0 30px" }}
          items={[
            <ServicesDetails photo={wedding} text="Weddings" />,
            <ServicesDetails photo={birthdays} text="Birthdays" />,
            <ServicesDetails photo={event} text="Events" />,
          ]}
        />
      </div>
    </div>
  );
}

export default ServicesHomePage;
