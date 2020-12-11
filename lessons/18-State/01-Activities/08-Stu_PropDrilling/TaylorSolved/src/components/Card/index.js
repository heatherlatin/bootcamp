import React from "react";
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import "./style.css";
import { tsPropertySignature } from "@babel/types";

function Card({ image, title, handleClick, email, language }) {
  return (
    <div>
      <CardHeading title={title} />
      <CardImg image={image} />
      <CardBody email={email} language={language} />
      <CardBtn style={{ opacity: image ? 1 : 0 }} onClick={handleClick} data-value="back" />
      <CardBtn style={{ opacity: image ? 1 : 0 }} onClick={handleClick} data-value="next" />
    </div>
  );
}

export default Card;
