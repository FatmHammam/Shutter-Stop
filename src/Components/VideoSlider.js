import { Carousel } from "react-bootstrap";
import gather from "../Images/gather.png";


function VideoSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={gather} className="w-100" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={gather} className="w-100" alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default VideoSlider;
