import React from "react";

const StarRating = ({ rating }) => {
  let starArr = Array(5).fill(<i className="far fa-star"></i>);
  starArr = starArr.map((ch, i) => {
    const item =
      i < ~~rating ? (
        <i className="fas fa-star"></i>
      ) : rating > i && rating < i + 1 ? (
        <i className="fas fa-star-half-alt"></i>
      ) : (
        ch
      );
    return <span key={i}>{item}</span>;
  });
  return <div className="left">{starArr}</div>;
};

export default StarRating;
