import React, { Component } from "react";
import "./addOffer.css";

//zapytanie
//CV
//
//
class AddOffer extends Component {
  state = {
    firm: "",
    address: "",
    phone: "",
    email: "",
    www: "",
    jobAdvertisement: "",
    jobAdvertisementLink: "",
    queryDate: "",
    CVDate: ""
  };

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
    const data = { ...this.state };
    // const {
    //   firm,
    //   address,
    //   phone,
    //   email,
    //   www,
    //   jobAdvertisement,
    //   jobAdvertisementLink,
    //   queryDate,
    //   CVDate
    // } = this.state;
    console.log(data);
    // const options = {
    //   method: "POST",
    //   body: JSON.stringify(data)
    //   // headers: {
    //   //   'Content-Type': 'application/json'
    //   // }
    // };
    // fetch("./addOffer.php", options)
    //   .then(response => response.json())
    //   .then(json => console.log(json));
  };

  render() {
    return (
      <form className="add_firm" onSubmit={this.handleSubmit}>
        <label>
          Podaj nazwę firmy{" "}
          <input
            name="firm"
            value={this.state.city}
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
        <button type="submit"> Dodaj firmę </button>{" "}
      </form>
    );
  }
}

export default AddOffer;
