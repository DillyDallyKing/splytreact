import { REQUEST_DRIVERS, CHANGE_VIEWPORT } from "../actions";

const initialState = {
  viewport: {
    width: 1150,
    height: 600,
    latitude: 51.5049375,
    longitude: -0.0964509,
    zoom: 13
  },
  mapStyle: "mapbox://styles/mapbox/dark-v9",
  drivers: []
};

export default function splytmapreducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DRIVERS:
      return {
        ...state,
        drivers: action.payload.body.data.drivers
      };
    case CHANGE_VIEWPORT:
      const viewport = {
        width: action.payload.newViewPort.width,
        height: action.payload.newViewPort.height,
        latitude: action.payload.newViewPort.latitude,
        longitude: action.payload.newViewPort.longitude,
        zoom: action.payload.newViewPort.zoom
      };
      return {
        ...state,
        viewport: viewport
      };
    default:
      return state;
  }
}
