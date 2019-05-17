import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import SplytMap from "./components/splytmap";
import SliderUI from "./components/sliderui";
import PollChecker from "./components/pollchecker";
import { Container, Row, Col } from "react-bootstrap";

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
      slidervalue: [1],
      pollcheckervalue: 0 // zero means off
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
    if (prevState.pollcheckervalue !== this.state.pollcheckervalue) {
      if (this.state.pollcheckervalue === 0) {
        clearInterval(this.timer);
        this.timer = null;
      } else {
        this.timer = setInterval(() => this.getDrivers(), 3000);
      }
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

  //POLLCHECKER RELATED

  pollClickChecker = pollcheckervalue => {
    if (this.state.pollcheckervalue === 1) {
      this.setState({ pollcheckervalue: 0 });
    } else {
      this.setState({ pollcheckervalue: 1 });
    }
  };

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
        <Row>
          <Col sm={11}>
            <SliderUI
              onChangeSlider={this.changeSlider}
              sliderValue={this.state.slidervalue}
            />
          </Col>
          <Col sm={1}>
            <PollChecker
              pollCheckerValue={this.state.pollcheckervalue}
              pollClickChecker={this.pollClickChecker}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

/*
//Checking for Unique userID
componentDidMount() {
  this.timer = setInterval(() => this.getCheckDrivers(), 2000);
}

getCheckDrivers() {
  axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://qa-interview-test.qa.splytech.io/api/drivers", //https cors-anywhere added to fix cors error
      {
        params: {
          latitude: 51.5049375,
          longitude: -0.0964509,
          count: 50
        }
      }
    )
    .then(response => {
      response.data.drivers.some(d =>
        d.driver_id.includes("31mjqzs") // was from one of the urid found
          ? console.log(
              "FOUND! " +
                d.driver_id +
                " LA:" +
                d.location.latitude +
                " LI" +
                d.location.longitude
            )
          : console.log("No")
      );
      
      //this.setState({
       // ...this.state,
        //drivers: response.data.drivers
      //});
    })
    .catch(function(error) {
      console.log(error);
    })
    .then(function() {
      // always executed
    });
}

*/
