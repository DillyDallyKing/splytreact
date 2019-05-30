import React, { Component } from "react";
import "../styles/App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import SplytMap from "../components/splytmap";
import SliderUI from "../components/sliderui";
import PollChecker from "../components/pollchecker";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";

class App extends Component {
  componentWillMount() {
    this.props.actions.requestDrivers();
  }
  render() {
    return (
      <Container>
        <Row>
          <SplytMap
            mapStyle={this.props.mapStyle}
            viewport={this.props.viewport}
            sliderValue={this.props.slidervalue}
            drivers={this.props.drivers}
            onChangeViewPort={this.props.actions.changeViewport}
          />
        </Row>
        <br />
        <Row>
          <Col sm={11}>
            <SliderUI
              onChangeSlider={slidervalue => {
                this.props.actions.sliderChange({ slidervalue });
              }}
              sliderValue={this.props.slidervalue}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    viewport: state.splytmap.viewport,
    mapStyle: state.splytmap.mapStyle,
    drivers: state.splytmap.drivers,
    slidervalue: state.sliderui.slidervalue
    //pollcheckervalue: 0 // zero means off
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

/*


          <Col sm={1}>
            <PollChecker
              pollCheckerValue={this.state.pollcheckervalue}
              pollClickChecker={this.pollClickChecker}
            />
          </Col>
        </Row>




//Checking for Unique userID
componentDidMount() {
  this.timer = setInterval(() => this.getCheckDrivers(), 2000);
}


 constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 1150,
        height: 600,
        latitude: 51.5049375,
        longitude: -0.0964509,
        zoom: 13
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
