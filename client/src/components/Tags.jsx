import React from "react";

const Tags = ({ tags }) => {
  return (
    <div className="right">
      {tags.map((tag, i) => (
        <p key={i} className="tag">
          {tag.toUpperCase()}
        </p>
      ))}
    </div>
  );
};

export default Tags;
