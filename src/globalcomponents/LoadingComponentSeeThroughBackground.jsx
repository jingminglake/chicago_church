import React from "react";

const LoadingComponentSeeThroughBackground = () => {
  return (
    <div className='abs-loading2' style={{ position: "fixed" }}>
      <div className='lds-ring2' id='spinner-form'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingComponentSeeThroughBackground;
