import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import SplytMap from "./components/splytmap";
import SliderUI from "./components/sliderui";
import { Container, Row } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 1150,
        height: 750,
        latitude: 51.5049375,
        longitude: -0.0964509,
        zoom: 14
      },
      mapStyle: "mapbox://styles/mapbox/dark-v9",
      drivers: [],
      slidervalue: [1]
    };
    this.getDrivers();
  }

  //SLIDER RELATED
  changeSlider = values => {
    this.setState({ slidervalue: values });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.slidervalue[0] !== this.state.slidervalue[0]) {
      this.getDrivers();
    }
  }

  //MAP RELATED
  changeViewport = newViewport => {
    const viewport = Object.assign({}, this.state.viewport, newViewport);
    this.setState({ viewport });
  };

  getDrivers() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://qa-interview-test.qa.splytech.io/api/drivers", //https cors-anywhere added to fix cors error
        {
          params: {
            latitude: 51.5049375,
            longitude: -0.0964509,
            count: this.state.slidervalue[0]
          }
        }
      )
      .then(response => {
        this.setState({
          ...this.state,
          drivers: response.data.drivers
        });
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    return (
      <Container>
        <Row>
          <SplytMap
            mapStyle={this.state.mapStyle}
            viewport={this.state.viewport}
            sliderValue={this.state.slidervalue}
            drivers={this.state.drivers}
            onChangeViewPort={this.changeViewport}
          />
        </Row>
        <br />
        <SliderUI
          onChangeSlider={this.changeSlider}
          sliderValue={this.state.slidervalue}
        />
      </Container>
    );
  }
}

export default App;
