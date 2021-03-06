import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./App.css";
import AddOffer from "./components/AddOffer";
import MainTable from "./components/MainTable";
import Navigation from "./components/Navigation";
import Edit from "./components/Edit";
import Update from "./components/Update";
import ShowFirm from "./components/ShowFirm";
import Stats from "./components/Stats";
import Copy from "./components/Copy";
import AOS from "aos";
import "aos/dist/aos.css";
import templateData from "./components/templateData";

class App extends Component {
  state = {
    formActive: false,
    firmList:
      JSON.parse(localStorage.getItem("savedFirmList")) ||
      JSON.parse(templateData)
  };

  handleCopy = () => {
    let firmList = [...this.state.firmList];

    localStorage.setItem("savedFirmListCopy", JSON.stringify(firmList));
  };
  handleButton = () => {
    this.setState({
      formActive: !this.state.formActive
    });
  };
  handleEditButton = i => {
    return (
      <Switch>
        <Redirect from="/" to="/new-path" />
        <Route path="/new-path" component={AddOffer} />{" "}
      </Switch>
    );
  };
  handleRemoveButton = index => {
    const firm = this.state.firmList[index].firm;

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
  editFirm = (data, index) => {
    let firmList = [...this.state.firmList];

    firmList.splice(index, 1, data);

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
          <Switch>
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
            />{" "}
            <Route
              path="/add"
              exact
              render={() => <AddOffer writeFirm={this.writeFirm} />}
            />
            <Route
              path="/edit/:id"
              exact
              render={props => (
                <Edit {...props} stateX={this.state} editFirm={this.editFirm} />
              )}
            />
            <Route
              path="/update/:id"
              exact
              render={props => (
                <Update
                  {...props}
                  state={this.state}
                  editFirm={this.editFirm}
                />
              )}
            />
            <Route
              path="/showFirm/:id"
              exact
              render={props => (
                <ShowFirm
                  {...props}
                  state={this.state}
                  editFirm={this.editFirm}
                />
              )}
            />{" "}
            <Route
              path="/stats"
              exact
              render={props => <Stats {...props} state={this.state} />}
            />
            <Route
              path="/kopia"
              exact
              render={props => <Copy {...props} copyList={this.handleCopy} />}
            />
            <Route
              path="/"
              render={() => (
                <MainTable
                  data={this.state.firmList}
                  handleRemoveButton={this.handleRemoveButton}
                  handleEditButton={this.handleEditButton}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
