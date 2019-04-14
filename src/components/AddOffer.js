import React, { Component } from "react";
import "./addOffer.css";

//zapytanie
//CV
//
//
class AddOffer extends Component {
  state = { firm: "", address: "", phone: "", email: "", www: "", text: "" };

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
    console.dir(this.state);
  };

  render() {
    return (
      <form className="add_firm" onSubmit={this.handleSubmit}>
        <label>
          Podaj nazwę firmy
          <input
            name="firm"
            value={this.state.city}
            onChange={this.handleChange}
            type="text"
            placeholder="Nazwa Firmy"
          />
        </label>
        <label>
          Podaj adres
          <input
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
            type="text"
            placeholder="Adres"
          />
        </label>
        <label>
          Podaj telefon
          <input
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            type="text"
            placeholder="Telefon"
          />
        </label>
        <label>
          Podaj e-mail
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            type="text"
            placeholder="email"
          />
        </label>
        <label>
          Podaj stronę www
          <input
            name="www"
            value={this.state.www}
            onChange={this.handleChange}
            type="text"
            placeholder="Strona internetowa"
          />
        </label>
        <label>
          Podaj treść ogłoszenia
          <textarea
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>{" "}
        <label>
          Podaj stronę www
          <input
            name="www"
            value={this.state.www}
            onChange={this.handleChange}
            type="text"
            placeholder="Strona internetowa"
          />
        </label>
        <button type="submit">Dodaj firmę</button>
      </form>
    );
  }
}

export default AddOffer;
