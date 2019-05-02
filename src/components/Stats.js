import React, { Component } from "react";

class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firmList: this.props.state.firmList
    };
  }
  render() {
    let all_apl = this.state.firmList.filter(
      item => item.CVDate || item.queryDate
    );
    let response = this.state.firmList.filter(item => item.replayDate);
    let wo = ((response.length / all_apl.length) * 100).toFixed(0);
    let response_effective = this.state.firmList.filter(
      item => item.interviewDate
    );
    let woe = ((response_effective.length / all_apl.length) * 100).toFixed(0);

    return (
      <div>
        <h1>
          {" "}
          Wysłano {all_apl.length}
          aplikacji / zapytań{" "}
        </h1>{" "}
        <h2> WO = {wo ? wo : 0} % </h2> <h2> WOE = {woe ? woe : 0} % </h2>{" "}
      </div>
    );
  }
}

export default Stats;
