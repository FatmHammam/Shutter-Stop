import {Carousel} from "react-bootstrap";
import Photo from "../Components/Photo";
import Slider from "../Images/Slider.png";

function VideoSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <Photo src={Slider} />
      </Carousel.Item>
      <Carousel.Item>
        <Photo src={Slider} />
      </Carousel.Item>
    </Carousel>
  );
}

export default VideoSlider;
