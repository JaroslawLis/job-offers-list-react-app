import React, { Component } from "react";

import "./update.css";
class Update extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.state.firmList[this.props.match.params.id];
    if (!this.state.replayDate) {
      this.state.replayDate = "";
    }
    if (!this.state.interviewDate) {
      this.state.interviewDate = "";
    }
    if (!this.state.recrutationNotices) {
      this.state.recrutationNotices = "";
    }
  }
  handleChange = e => {
    if (e.target.type === "textarea") {
      this.setState({
        [e.target.name]: e.target.value
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.editFirm(this.state, this.props.match.params.id);
    this.props.history.push("/");
  };

  render() {
    return (
      <div data-aos="zoom-out">
        <h3>Aktualizacja firmy {this.state.firm}</h3>
        <form className="update_firm" onSubmit={this.handleSubmit}>
          <label>
            Data odpowiedzi
            <input
              name="replayDate"
              value={this.state.replayDate}
              onChange={this.handleChange}
              type="Date"
            />
          </label>
          <label>
            Data rozmowy rekrutacyjnej
            <input
              name="interviewDate"
              value={this.state.interviewDate}
              onChange={this.handleChange}
              type="Date"
            />
          </label>
          <label>
            Uwagi dotyczące rekrutacji
            <textarea
              name="recrutationNotices"
              value={this.state.recrutationNotices}
              onChange={this.handleChange}
            />{" "}
          </label>{" "}
          <button type="submit">Aktualizuj dane </button>{" "}
        </form>{" "}
      </div>
    );
  }
}

export default Update;
