import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class PollChecker extends Component {
  render() {
    return (
      <div>
        <Button
          className={this.getButtonClasses()}
          onClick={this.props.pollClickChecker}
        >
          {this.checkPollCheckerValue()}
        </Button>
      </div>
    );
  }

  getButtonClasses() {
    let classes = "btn btn-";
    classes += this.props.pollCheckerValue === 1 ? "primary" : "dark";
    return classes;
  }

  checkPollCheckerValue() {
    const pollCheckerValue = this.props.pollCheckerValue;
    return pollCheckerValue === 1 ? "Polling ON" : "Polling OFF";
  }
}

export default PollChecker;
