import React from "react";

const LoadingComponent = ({ position }) => {
  return (
    <div
      className='abs-loading'
      style={{ position: position ? position : "fixed" }}
    >
      <div className='lds-ring' id='spinner-form'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingComponent;
