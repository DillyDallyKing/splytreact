import axios from "axios";

export const REQUEST_DRIVERS = "REQUEST_DRIVERS";
export const CHANGE_VIEWPORT = "CHANGE_VIEWPORT";
export const SLIDER_CHANGE = "SLIDER_CHANGE";

const API_URL =
  "https://cors-anywhere.herokuapp.com/https://qa-interview-test.qa.splytech.io/api/drivers";

export function requestDrivers(count = null) {
  return function(dispatch) {
    axios
      .get(
        API_URL, //https cors-anywhere added to fix cors error
        {
          params: {
            latitude: 51.5049375,
            longitude: -0.0964509,
            count: count //this.state.slidervalue[0]
          }
        }
      )
      .then(response => {
        dispatch({
          type: REQUEST_DRIVERS,
          payload: response
        });
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  };
}

export const changeViewport = newViewport => {
  return dispatch => {
    dispatch({
      type: CHANGE_VIEWPORT,
      payload: newViewport
    });
  };
};

export const sliderChange = slidervalue => {
  return dispatch => {
    dispatch({
      type: SLIDER_CHANGE,
      payload: slidervalue
    });
  };
};
