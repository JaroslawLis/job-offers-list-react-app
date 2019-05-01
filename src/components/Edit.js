import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./edit.css";
class Edit extends Component {
  state = {};
  render() {
    console.log(this.props.match.params.id);
    return (
      <>
        <div />;
        {/* <Product id={match.params.id} />
              <Link to="/products">Powrót do listy produktów</Link> */}
      </>
    );
  }
}

export default Edit;
