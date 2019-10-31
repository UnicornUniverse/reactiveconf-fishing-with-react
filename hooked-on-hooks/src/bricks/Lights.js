import React, { useReducer, useEffect, useContext } from "react";
import HueContext from "../contexts/HueContext";
import LightList from "./LightList";
import LightReducer from "../reducers/LightReducer";

function transform(response) {
  return Object.keys(response).map(key => {
    let light = response[key];
    light.id = key;
    return light;
  });
}

function Lights() {
  const hueContext = useContext(HueContext);
  const [lights, dispatch] = useReducer(LightReducer, []);
  /* TODO Add useRef for timerId */

  useEffect(() => {
    async function loadLights() {
      if (hueContext.status !== "ready") {
        return;
      }

      const response = await hueContext.user.getLights();

      const newLights = transform(response);

      dispatch({ type: "reset", payload: newLights });
    }

    /* TODO reload lights every 1 s */

    loadLights();

    /* TODO  Clean up your timer */
  }, [hueContext]);

  function dispatchWrapper(dispatch) {
    return action => {
      const { payload } = action;

      switch (action.type) {
        case "toggleOn":
          hueContext.user.setLightState(payload.light.id, {
            on: payload.on
          });
          break;
        case "setBrightness":
          hueContext.user.setLightState(payload.light.id, {
            bri: payload.bri
          });
          break;
        case "setHue":
          hueContext.user.setLightState(payload.light.id, { hue: payload.hue });
          break;
        case "setSaturation":
          hueContext.user.setLightState(payload.light.id, { sat: payload.sat });
          break;
        case "setColor":
          hueContext.user.setLightState(payload.light.id, payload.color);
          break;
        case "setEffect":
          hueContext.user.setLightState(payload.light.id, {
            effect: payload.effect
          });
          break;
        default:
          break;
      }

      dispatch(action);
    };
  }

  if (hueContext.status === "connecting") {
    return "Connecting to bridge...";
  }

  return <LightList lights={lights} onDispatch={dispatchWrapper(dispatch)} />;
}

export default Lights;
