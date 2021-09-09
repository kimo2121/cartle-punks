import React from "react";
import "./roadMap.css";

const RoadMap: React.FC = () => {
  return (
    <div className="road-map">
      <h1>ROADMAP</h1>
      <div className="map-1st">
        <h4>STAGE ONE </h4>
        <p>Mint 10000 cartelpunks</p>
      </div>
      <div className="map-1st">
        <h3>Stage two</h3>
        <p>
          Sell out 25% - We immediately use the funds to build the CartelPunks
          Community. We will hire community managers and moderators for the
          Discord.
        </p>
      </div>
      <div className="map-1st">
        <h2>stage three</h2>
        <p>Get collection featured on Rarity Tools</p>
      </div>
      <div className="map-1st">
        <h4>Stage Four</h4>
        <p>
          Sell out 50% - Establish partnerships in the NFT space and continue to
          grow the community.
        </p>
      </div>
      <div className="map-1st">
        <h5>Stage Five</h5>
        <p>
          Sell out 100% - Launch massive marketing to bring more awareness to
          our community. Continue growing the Twitter and Discord community.
        </p>
      </div>
      <div className="map-1st">
        <h5>STAGE six </h5>
        <p>Get the CartelPunk collection on OpenSea.io Verified!</p>
      </div>
    </div>
  );
};

export default RoadMap;
