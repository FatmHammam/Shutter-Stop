import Slider from "../Images/Slider.png"

function VideoSlider() {
	return (
		<div className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src={Slider} className="d-block w-100 img1" alt="..." />
				</div>
			</div>
		</div>
	);
}

export default VideoSlider;





















