import Template from "./Template";
import Photo from "./Photo";
import Header from "./Header";
import AnimatedSquares from "./AnimatedSquares";
import one from "../Images/one.png";
import two from "../Images/two.png";
import four from "../Images/four.png";
import five from "../Images/five.png";
import six from "../Images/six.png";
import seven from "../Images/seven.png";
import eight from "../Images/eight.png";
import ten from "../Images/ten.png";
import eleven from "../Images/eleven.png";
import twelve from "../Images/twelve.png";

function OurPhotos({ title, more }) {
  return (
    <Template
      itemsContainerStyle={{ marginBottom: 180 }}
      header={
        <>
          <AnimatedSquares />
          <Header
            more={more}
            title={title}
            centered={false}
            color="#6F4AB0"
            bgColor="#6F4AB0"
          />
        </>
      }
      itemStyle={{
        width: `${
          100 / (window.innerWidth > 992 ? 6 : window.innerWidth > 768 ? 3 : 2)
        }%`,
        padding: "0 20px",
        marginTop: 40,
      }}
      items={[
        <Photo src={one} />,
        <Photo src={two} />,
        <Photo src={twelve} />,
        <Photo src={four} />,
        <Photo src={five} />,
        <Photo src={six} />,
        <Photo src={seven} />,
        <Photo src={eight} />,
        <Photo src={two} />,
        <Photo src={ten} />,
        <Photo src={eleven} />,
        <Photo src={twelve} />,
      ]}
    />
  );
}

export default OurPhotos;
