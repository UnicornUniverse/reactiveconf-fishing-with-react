/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState, useEffect } from "react";

const main = css`
  outline-style: solid;
  outline-color: black;
  outline-width: 5px;
  width: 100%;
  height: 30px;
`;

const slider = css`
  background-color: green;
  height: 100%;
`;

function LightSlider({ min, max, initValue, onChange }) {
  /* TODO Add useRef */
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  function _handleClick(event) {
    /* TODO Uncomment and use ref to compute new width */
    // const newWidth =
    //   (event.clientX - ref.current.offsetLeft) / ref.current.offsetWidth;
    // const newValue = Math.round(newWidth * (max - min) + min);
    // setValue(newValue);
    // onChange(newValue);
  }

  const width = ((value - min) / (max - min)) * 100;

  /* TODO Add prop ref */
  return (
    <div css={main} onClick={_handleClick}>
      <div
        css={css`
          ${slider};
          width: ${width}%;
        `}
      ></div>
    </div>
  );
}

export default LightSlider;
