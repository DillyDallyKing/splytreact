import React from "react";
import { Marker as RMarker } from "react-map-gl";

import "../styles/marker.css";

export const MarkerSvg = ({ color }) => (
  <svg height="25" width="25">
    <circle
      cx="12"
      cy="12"
      r="11"
      stroke="#13d0e9"
      strokeWidth="2"
      fill={color}
    />
  </svg>
);

const Marker = ({ color, text, xy }) => (
  <RMarker latitude={xy.x} longitude={xy.y} offsetLeft={0} offsetTop={0}>
    {MarkerSvg({ color })}
    <div className="marker">{text}</div>
  </RMarker>
);

export default Marker;
