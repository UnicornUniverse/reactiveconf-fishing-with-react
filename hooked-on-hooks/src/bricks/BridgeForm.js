/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const labelCss = css`
  font-weight: bold;
  margin-right: 10px;
`;

export default function BridgeForm() {
  /* TODO Add useState */

  /* TODO Add _handleChange */

  /* TODO Add _handleClick */

  return (
    <div>
      <span css={labelCss}>Bridge IP:</span>
      <input type="text" />
      <button>Connect</button>
    </div>
  );
}
