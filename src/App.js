import React, { Component } from "react";

import "./App.css";
import AddOffer from "./components/AddOffer";
import MainTable from "./components/MainTable";

class App extends Component {
  state = {
    formActive: false
  };

  firmList = JSON.parse(localStorage.getItem("savedFirmList")) || [];

  handleButton = () => {
    this.setState({
      formActive: !this.state.formActive
    });
  };

  writeFirm = data => {
    this.firmList.push(data);
    console.log(this.firmList);
    localStorage.setItem("savedFirmList", JSON.stringify(this.firmList));
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleButton}>Pokaż/Ukryj Formularz </button>
        {this.state.formActive && <AddOffer writeFirm={this.writeFirm} />}

        <MainTable data={this.firmList} />
      </div>
    );
  }
}

export default App;
