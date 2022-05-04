import Slider from "../Images/Slider.png"

function VideoSlider() {
	return (
		<div class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src={Slider} class="d-block w-100 img1" alt="..." />
				</div>
			</div>
		</div>
	);
}

export default VideoSlider;





















