import React from "react";
import { useHistory } from "react-router";
import "./home.css";
import punk_300 from "../../assets/images/punk_300.jpeg";
import punk_301 from "../../assets/images/punk_301.jpeg";
import punk_305 from "../../assets/images/punk_305.jpeg";
import punk_304 from "../../assets/images/punk_304.jpeg";
import punk_303 from "../../assets/images/punk_303.jpeg";
import punk_302 from "../../assets/images/punk_302.jpeg";
import punk_311 from "../../assets/images/punk_311.jpeg";
import punk_3 from "../../assets/sliderImg/punk_3.jpeg";

import MultiSlider from "../../components/Slider/Slider";
import RoadMap from "../../components/RoadMap/RoadMap";
import FAQ from "../../components/FAQ/FAQ";

const Home: React.FC = () => {
  const history = useHistory();

  const routeChange = () => {
    window.location.href = "https://discord.com/";
  };
  return (
    <div>
      <div className="home">
        <h1>
          <span>Cartel</span>Punks
        </h1>
        <div className="what-are-cartel">
          <div>
            <h2>
              So,what are Cartel<span>Punks</span>?
            </h2>
            <p>
              <span>Cartel</span>
              Punks are NFTs living on the Etherium blockchain. We have equal
              FAIR DISTRIBUTION. CartelPunks were designed by hand, but
              algorithmically generated on the Ethereum blockchain.
            </p>
          </div>
          <img src={punk_300} alt="" />
        </div>
        <div className="cartel-attributes">
          <img src={punk_301} alt="" />
          <p>
            Each of these 10,000 CartelPunks has attributes that make them
            unique to establish exclusivity.
          </p>
        </div>
        <div className="set-limit">
          <p>
            We set to limit, you can mint up to maximum 20 CartelPunks in one
            transaction. So you can mint 1 to 20 Punks at a go, if you mint 1
            your cost will be the 0.03 ethereum + 1 gas fee, if you mint 20 your
            cost will be the 0.6 ethereum + 20 gas fee. Do you want to mint
            more? Start another transaction and mint.
          </p>
          <div className="punk-images">
            <img src={punk_305} alt="" />
            <img src={punk_304} alt="" />
            <img src={punk_303} alt="" />
            <img src={punk_302} alt="" />
            <img src={punk_311} alt="" />
          </div>
        </div>
      </div>
      <MultiSlider />
      <div className="join-community">
        <div>
          <h2>The Community</h2>
          <p>
            We have a friendly and stably growing community. Join us on our{" "}
            <a href="https://discord.gg/GvzVuSypzK">Discord</a> to discuss new
            ideas, get notified about drops.
          </p>
          <button onClick={routeChange}>Join</button>
        </div>
        <img src={punk_3} alt="" />
      </div>
      <FAQ />
      <RoadMap />
    </div>
  );
};

export default Home;
