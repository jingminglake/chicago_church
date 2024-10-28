import React, { useState, useCallback } from "react";

import { clickout } from "../helpers/clickout";

const AbsoluteSelect = ({ state }) => {
  const [show, setShow] = useState(false);

  const c = useCallback(() => {
    clickout([state.id, state.id + "-sel"], state.id, setShow, false);
  }, []);

  if (state.parent) {
    $(`#${state.parent}`).off("click", `#${state.parent}`, c).click(c);
  } else {
    $(document).off("click", `#${state.parent}`, c).click(c);
  }

  return (
    <div
      className='select-rel'
      style={{
        margin: "15px 0",
        zIndex: state?.zIndex,
      }}
    >
      <div
        className='select-sel'
        onClick={() => setShow((prev) => !prev)}
        id={state.id + "-sel"}
      >
        <div className='f-s-main'>{state.name || state.novalue}</div>
        <div className='grow' />
        <div
          className='mitem-caret2'
          style={{
            transform: !show && "rotate(-90deg)",
          }}
        />
      </div>

      {show && (
        <div className='select-selch s-selch' id={state.id}>
          {state.options.map((opt) => (
            <div
              className='select-ch'
              onClick={() => {
                if (opt.oc) {
                  opt.oc();
                }

                state.setValue(opt.value);
                setShow(false);
              }}
            >
              {opt.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AbsoluteSelect;
