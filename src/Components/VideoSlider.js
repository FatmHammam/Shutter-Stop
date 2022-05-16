import {Carousel} from "react-bootstrap";
import Slider from "../Images/Slider.png";

function VideoSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Slider} className="w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Slider} className="w-100" />
      </Carousel.Item>
    </Carousel>
  );
}

export default VideoSlider;
