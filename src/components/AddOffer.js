import React, { Component } from "react";
import "./addOffer.css";

class AddOffer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firm: "",
      address: "",
      phone: "",
      email: "",
      www: "",
      jobAdvertisement: "",
      jobAdvertisementLink: "",
      queryDate: "",
      CVDate: "",
      notices: ""
    };
  }

  firmList = JSON.parse(localStorage.getItem("savedFirmList")) || [];

  handleChange = e => {
    console.log(e.target.name);
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
    const data = {
      ...this.state
    };
    this.props.writeFirm(data);
    // this.firmList.push(data);
    // console.log(this.firmList);
    // localStorage.setItem("savedFirmList", JSON.stringify(this.firmList));

    this.setState({
      firm: "",
      address: "",
      phone: "",
      email: "",
      www: "",
      jobAdvertisement: "",
      jobAdvertisementLink: "",
      queryDate: "",
      CVDate: "",
      notices: ""
    });
  };

  render() {
    // console.log(this.props);
    return (
      <div data-aos="flip-left">
        <form className="add_firm" onSubmit={this.handleSubmit}>
          <label>
            Podaj nazwę firmy{" "}
            <input
              name="firm"
              value={this.state.firm}
              onChange={this.handleChange}
              type="text"
              placeholder="Nazwa Firmy"
            />
          </label>{" "}
          <label>
            Podaj adres{" "}
            <input
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              type="text"
              placeholder="Adres"
            />
          </label>{" "}
          <label>
            Podaj telefon{" "}
            <input
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              type="text"
              placeholder="Telefon"
            />
          </label>{" "}
          <label>
            Podaj e - mail{" "}
            <input
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
              placeholder="email"
            />
          </label>{" "}
          <label>
            Podaj stronę www{" "}
            <input
              name="www"
              value={this.state.www}
              onChange={this.handleChange}
              type="text"
              placeholder="Strona internetowa"
            />
          </label>{" "}
          <label>
            Podaj treść ogłoszenia{" "}
            <textarea
              name="jobAdvertisement"
              value={this.state.jobAdvertisement}
              onChange={this.handleChange}
            />{" "}
          </label>{" "}
          <label>
            Podaj link do ogłoszenia{" "}
            <input
              name="jobAdvertisementLink"
              value={this.state.jobAdvertisementLink}
              onChange={this.handleChange}
              type="text"
              placeholder="Strona internetowa"
            />
          </label>{" "}
          <label>
            Data wysłania zapytania{" "}
            <input
              name="queryDate"
              value={this.state.queryDate}
              onChange={this.handleChange}
              type="Date"
            />
          </label>{" "}
          <label>
            Data wysłania CV{" "}
            <input
              name="CVDate"
              value={this.state.CVDate}
              onChange={this.handleChange}
              type="Date"
            />
          </label>{" "}
          <label>
            Uwagi{" "}
            <textarea
              name="notices"
              value={this.state.notices}
              onChange={this.handleChange}
            />{" "}
          </label>{" "}
          <button type="submit"> Dodaj firmę </button>{" "}
        </form>{" "}
      </div>
    );
  }
}

export default AddOffer;
