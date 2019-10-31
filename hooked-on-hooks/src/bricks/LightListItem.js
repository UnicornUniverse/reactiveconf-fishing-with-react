/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import LightSwitch from "./LightSwitch";
import LightSlider from "./LightSlider";
import LightIcon from "./LightIcon";

const main = css`
  display: flex;
  flex-flow: row wrap;
  background-color: #2a2a2a;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  color: #7f7f7f;
  margin-bottom: 10px;
  border-radius: 15px;
`;

const icon = css`
  width: 10%;
`;

const name = css`
  flex-grow: 1;
  text-align: left;
`;

const lightSwitch = css``;

const brightness = css`
  width: 100%;
  flex-grow: 1;
`;

function LightListItem({ light, onDispatch }) {
  function switchLight() {
    // TODO Uncomment onDispatch
    //onDispatch({ type: "toggleOn", payload: { light, on: !light.state.on } });
  }

  function setBrightness(bri) {
    // TODO Uncomment onDispatch
    // onDispatch({
    //   type: "setBrightness",
    //   payload: { light, bri }
    // });
  }

  function _renderBrightness() {
    if (!light.state.on) {
      return null;
    }

    return (
      <div css={brightness}>
        <LightSlider
          min={1}
          max={254}
          initValue={light.state.bri}
          onChange={setBrightness}
        />
      </div>
    );
  }

  return (
    <div css={main}>
      <div css={icon}>
        <LightIcon light={light} />
      </div>
      <div css={name}>
        <h1>{light.name}</h1>
      </div>
      <div css={lightSwitch}>
        <LightSwitch light={light} onChange={switchLight} />
      </div>
      {_renderBrightness()}
    </div>
  );
}

export default LightListItem;
