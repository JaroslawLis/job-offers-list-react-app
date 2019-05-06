import React from "react";

const Copy = props => {
  console.log(props);
  return (
    <div>
      <h1>
        {" "}
        <button onClick={props.copyList}> Kopia </button>{" "}
      </h1>{" "}
    </div>
  );
};

export default Copy;
