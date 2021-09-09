import React from "react";
import "./FAQ.css";

const FAQ: React.FC = () => {
  return (
    <div className="faq">
      <h1>FAQ</h1>
      <div className="1st-div">
        <h2>What are CartelPunks?</h2>
        <p>CartelPunks are NFTs living on the Etherium blockchain. </p>
      </div>
      <div className="1st-div">
        <h2>How will the cartelpunks be Launched?</h2>
        <p>Join our Discord or follow us on Twitter for updates. </p>
      </div>
      <div className="1st-div">
        <h2>What will be the minting price?</h2>
        <p>0.01 eth </p>
      </div>
      <div className="1st-div">
        <h2>Where can I buy?</h2>
        <p>You will be able to mint the NFTs on our website on minting day. </p>
      </div>
    </div>
  );
};

export default FAQ;
