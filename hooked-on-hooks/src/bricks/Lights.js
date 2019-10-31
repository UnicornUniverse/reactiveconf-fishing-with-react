import React, { useState, useEffect, useContext } from "react";
import HueContext from "../contexts/HueContext";
import LightList from "./LightList";

function transform(response) {
  return Object.keys(response).map(key => {
    let light = response[key];
    light.id = key;
    return light;
  });
}

function Lights() {
  const hueContext = useContext(HueContext);
  /* TODO Change useState for useReducer with LightReducer */
  const [lights, setLights] = useState([]);

  useEffect(() => {
    async function loadLights() {
      if (hueContext.status !== "ready") {
        return;
      }

      const response = await hueContext.user.getLights();

      const newLights = transform(response);

      /* TODO Change setLights for dispatch */
      setLights(newLights);
    }

    loadLights();
  }, [hueContext]);

  // function dispatchWrapper(dispatch) {
  //   return action => {
  //     const { payload } = action;

  //     switch (action.type) {
  //       case "toggleOn":
  //         hueContext.user.setLightState(payload.light.id, {
  //           on: payload.on
  //         });
  //         break;
  //       case "setBrightness":
  //         hueContext.user.setLightState(payload.light.id, {
  //           bri: payload.bri
  //         });
  //         break;
  //       default:
  //         break;
  //     }

  //     dispatch(action);
  //   };
  // }

  if (hueContext.status === "connecting") {
    return "Connecting to bridge...";
  }

  /* TODO Set prop onDispatch */
  return <LightList lights={lights} />;
}

export default Lights;
