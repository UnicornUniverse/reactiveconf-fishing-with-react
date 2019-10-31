/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";

const labelCss = css`
  font-weight: bold;
  margin-right: 10px;
`;

export default function BridgeForm() {
  const [bridgeIp, setBridgeIp] = useState("192.168.0.100");
  /* TODO Add useContext */

  function _handleChange(e) {
    setBridgeIp(e.target.value);
  }

  function _handleClick() {
    /* TODO Call method addBridge from HueContext */
  }

  return (
    <div>
      <span css={labelCss}>Bridge IP:</span>
      <input type="text" value={bridgeIp} onChange={_handleChange} />
      <button onClick={_handleClick}>Connect</button>
    </div>
  );
}
