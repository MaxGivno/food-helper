import React from "react";

function ForkedFrom({ source }) {
  return (
    <footer className="forked-from">
      <p>Forked from:</p>
      <h3>{source}</h3>
    </footer>
  );
}

export default ForkedFrom;
