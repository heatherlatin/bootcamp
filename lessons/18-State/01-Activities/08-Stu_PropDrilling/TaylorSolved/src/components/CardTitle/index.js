import React from "react";
import CardTitleText from "../CardTitleText";
import "./style.css";


function CardTitle(props) {
  return (
    <div className="blue text-center">
      <CardTitleText {...props} />
    </div>
  );
}

export default CardTitle;
