import React from "react";

function Directions({ instructions }) {
  const steps = () => {
    const regex = /(?:\r\n)+/g;
    let paragraphs = instructions.split(regex);
    paragraphs = paragraphs.filter((str) => !str.match(/^\d+\.\s/));
    return paragraphs.map((text, i) => (
      <li key={i}>
        <p>{text}</p>
      </li>
    ));
  };

  return (
    <section className="steps">
      <h3 className="recipe-element-title">Directions:</h3>
      <ol className="steps-list">{steps()}</ol>
    </section>
  );
}

export default Directions;
