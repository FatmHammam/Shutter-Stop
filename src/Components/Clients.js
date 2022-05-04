import Header from "./Header";
import Template from "./Template";
import ClientsLogos from "./ClientsLogos";
import homeTown from '../Images/homeTown.png';
import geekCampus from '../Images/geekCampus.png';
import nfr from '../Images/nfr.png';
import homy from '../Images/homy.png';
import summit1 from '../Images/summit1.png';
import summit2 from '../Images/summit2.png';

function Clients() {
  return (
    <Template
      header={
        <Header
          leftSpanwidth={"40%"}
          bgColor={"#C65FAA"}
          color={"#C65FAA"}
          title={"Our Clients"}
          rightSpanWidth={"40%"}
        />}
      itemStyle={{ width: `${100 / 6}%` }}
      items={
        [
          <ClientsLogos photo={homeTown} />,
          <ClientsLogos photo={geekCampus} />,
          <ClientsLogos photo={nfr} />,

          <ClientsLogos photo={homy} />,
          <ClientsLogos photo={summit1} />,
          <ClientsLogos photo={homeTown} />,

          <ClientsLogos photo={homeTown} />,
          <ClientsLogos photo={geekCampus} />,
          <ClientsLogos photo={nfr} />,

          <ClientsLogos photo={homy} />,
          <ClientsLogos photo={summit2} />,
          <ClientsLogos photo={homeTown} />
        ]
      }
    />
  );
}

export default Clients;


