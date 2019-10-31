import React, { useState, useContext } from "react";
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
  const [lights] = useState([]);

  /* TODO Add useEffect and load lights */

  if (hueContext.status === "connecting") {
    return "Connecting to bridge...";
  }

  return <LightList lights={lights} />;
}

export default Lights;
