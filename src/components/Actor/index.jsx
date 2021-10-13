import React from "react";
import "../Actor/style.css";

const Actor = ({ name, as }) => {
  return (
    <>
      <div className="actor">
        <p className="actor__name">{name}</p>
        <p className="actor__role"> as {as}</p>
      </div>
    </>
  );
};

export default Actor;