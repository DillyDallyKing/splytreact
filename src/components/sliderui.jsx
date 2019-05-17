import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import { Handle, Track, TooltipRail } from "./slidercomponents";

const sliderStyle = {
  position: "relative",
  width: "100%"
};
const domain = [1, 50];

class SliderUI extends Component {
  state = {
    update: 1 // just for the badge to show
  };
  onUpdate = update => {
    this.setState({ update });
  };
  render() {
    const { sliderValue } = this.props;
    return (
      <React.Fragment>
        <h3>
          NO. OF TAXIS TO SHOW{" "}
          <Badge
            variant="light"
            style={{
              backgroundColor: "#13d0e9"
            }}
          >
            {this.state.update}
          </Badge>
        </h3>
        <br />
        <Slider
          mode={1}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onUpdate={this.onUpdate}
          onChange={this.props.onChangeSlider}
          values={sliderValue}
        >
          <Rail>{railProps => <TooltipRail {...railProps} />}</Rail>
          <Handles>
            {({ handles, activeHandleID, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    isActive={handle.id === activeHandleID}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
        </Slider>
      </React.Fragment>
    );
  }
}

export default SliderUI;
