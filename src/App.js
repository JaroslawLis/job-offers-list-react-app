import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddOffer from "./components/AddOffer";
import MainTable from "./components/MainTable";
import Navigation from "./components/Navigation";
import AOS from "aos";
import "aos/dist/aos.css";

class App extends Component {
  state = {
    formActive: false,
    firmList: JSON.parse(localStorage.getItem("savedFirmList")) || []
  };

  // firmList = JSON.parse(localStorage.getItem("savedFirmList")) || [];

  handleButton = () => {
    this.setState({
      formActive: !this.state.formActive
    });
  };
  handleEditButton = i => {
    console.log(i);
  };
  handleRemoveButton = index => {
    console.log("it working", index, this.state.firmList);
    const firm = this.state.firmList[index].firm;
    console.log(firm);
    if (window.confirm(`czy usunąć firmę \n${firm}`)) {
      let firmList = [...this.state.firmList];

      firmList.splice(index, 1);
      localStorage.setItem("savedFirmList", JSON.stringify(firmList));
      this.setState({
        firmList
      });
    }
  };

  writeFirm = data => {
    let firmList = [...this.state.firmList];
    firmList.push(data);

    localStorage.setItem("savedFirmList", JSON.stringify(firmList));
    this.setState({
      firmList
    });
  };

  componentDidMount() {
    AOS.init({
      duration: 1500
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route
            path="/"
            exact
            render={() => (
              <MainTable
                data={this.state.firmList}
                handleRemoveButton={this.handleRemoveButton}
                handleEditButton={this.handleEditButton}
              />
            )}
          />
          <Route
            path="/add"
            exact
            render={() => <AddOffer writeFirm={this.writeFirm} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
