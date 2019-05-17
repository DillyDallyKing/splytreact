import React, { Component } from "react";
import ReactMapGL from "react-map-gl";
import Marker from "./marker";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZGlsbHlkYWxseWtpbmciLCJhIjoiY2p2cTQwdDRtMmdndDQzdWk1cTlnaWVsdCJ9.LMxCq82F5lraSijGeJOvRw";

class SplytMap extends Component {
  render() {
    return (
      <div>
        <ReactMapGL
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle={this.props.mapStyle}
          {...this.props.viewport}
          onViewportChange={viewport => this.props.onChangeViewPort(viewport)}
        >
          {this.props.drivers.map((driver, i) => {
            return (
              <Marker
                xy={{
                  x: driver.location.latitude,
                  y: driver.location.longitude
                }}
                color={"#FFFFFF"}
                key={i}
                text={
                  parseInt(
                    driver.driver_id.substr(0, driver.driver_id.indexOf("-"))
                  ) + 1
                }
              />
            );
          })}
        </ReactMapGL>
      </div>
    );
  }
}

export default SplytMap;

/*
          <Popup
            latitude={51.5049375}
            longitude={-0.0964509}
            closeButton={false}
            closeOnClick={false}
            anchor="bottom"
            tipSize={3}
          >
            <div>SPYLT</div>
          </Popup>
          */
