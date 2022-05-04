import Template from "./Template";
import PhotoSample from "./PhotoSample";
import Header from "./Header";
import one from '../Images/one.png';
import two from '../Images/two.png';
import three from '../Images/three.png';
import four from '../Images/four.png';
import five from '../Images/five.png';
import six from '../Images/six.png';
import seven from '../Images/seven.png';
import eight from '../Images/eight.png';
import nine from '../Images/nine.png';
import ten from '../Images/ten.png';
import eleven from '../Images/eleven.png';
import twelve from '../Images/twelve.png';

function OurPhotos({ title }) {
  return (
    <Template
      header={
        <Header
          leftSpanwidth={"8%"}
          bgColor={"#6F4AB0"}
          color={"#6F4AB0"}
          title={title}
          rightSpanWidth={"72%"}
        />}
      itemStyle={{ width: `${100 / 6}%`, padding: '0 20px', marginTop: 40 }}
      items={
        [
          < PhotoSample photo={one} />,
          < PhotoSample photo={two} />,
          < PhotoSample photo={three} />,
          < PhotoSample photo={four} />,
          < PhotoSample photo={five} />,
          < PhotoSample photo={six} />,
          < PhotoSample photo={seven} />,
          < PhotoSample photo={eight} />,
          < PhotoSample photo={nine} />,
          < PhotoSample photo={ten} />,
          < PhotoSample photo={eleven} />,
          < PhotoSample photo={twelve} />
        ]
      }
    />
  );
}

export default OurPhotos;


