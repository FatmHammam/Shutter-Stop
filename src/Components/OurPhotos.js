import Template from "./Template";
import Photo from "./Photo";
import Header from "./Header";
import one from "../Images/one.png";
import two from "../Images/two.png";
import three from "../Images/three.png";
import four from "../Images/four.png";
import five from "../Images/five.png";
import six from "../Images/six.png";
import seven from "../Images/seven.png";
import eight from "../Images/eight.png";
import nine from "../Images/nine.png";
import ten from "../Images/ten.png";
import eleven from "../Images/eleven.png";
import twelve from "../Images/twelve.png";
import small_squares_background from "../Images/small_squares_background.svg";

function OurPhotos({ title }) {
  return (
    <Template
      background={small_squares_background}
      itemsContainerStyle={{ marginBottom: 180 }}
      header={
        <Header
          title={title}
          centered={false}
          color="#6F4AB0"
          bgColor="#6F4AB0"
        />
      }
      itemStyle={{ width: `${100 / 6}%`, padding: "0 20px", marginTop: 40 }}
      items={[
        <Photo src={one} />,
        <Photo src={two} />,
        <Photo src={three} />,
        <Photo src={four} />,
        <Photo src={five} />,
        <Photo src={six} />,
        <Photo src={seven} />,
        <Photo src={eight} />,
        <Photo src={nine} />,
        <Photo src={ten} />,
        <Photo src={eleven} />,
        <Photo src={twelve} />,
      ]}
    />
  );
}

export default OurPhotos;
