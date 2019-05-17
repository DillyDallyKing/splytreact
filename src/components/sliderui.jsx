import React, { Component } from "react";
import { Slider, InputNumber, Row, Col } from "antd";
import "antd/dist/antd.css";

class SliderUI extends Component {
  render() {
    const { sliderValue } = this.props;
    return (
      <React.Fragment>
        <Row>
          <Col span={12}>
            <h3>NO. OF DRIVERS TO SHOW</h3>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Slider
              min={1}
              max={50}
              onChange={sliderValue => this.props.onSliderChange(sliderValue)}
              onAfterChange={value => this.props.onAfterSliderChange(value)}
              value={typeof sliderValue === "number" ? sliderValue : 1}
            />
          </Col>

          <Col span={4}>
            <InputNumber
              min={1}
              max={50}
              style={{ marginLeft: 16, fontSize: 20, fontWeight: "bold" }}
              value={sliderValue}
              onChange={sliderValue => this.props.onSliderChange(sliderValue)}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default SliderUI;
