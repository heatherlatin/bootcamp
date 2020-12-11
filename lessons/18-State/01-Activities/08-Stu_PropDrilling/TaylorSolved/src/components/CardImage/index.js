import React from "react";

function CardImg(props) {
  return (
    <div>
      {props.image && <img className="card-img" src={props.image} alt="user thumbnail" />}
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default CardImg;