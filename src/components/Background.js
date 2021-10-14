import React from "react";
function Background(props) {
  return (
    <>
      <img className="background__img" src={props.src} alt="Travel Place" />
    </>
  );
}

export default Background;
