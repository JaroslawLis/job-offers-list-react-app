import React, { Component } from "react";

class MainTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    };
  }

  render() {
    console.log(this.props.data);
    const data = this.props.data.map((offer, i) => (
      <li key={i}>{offer.firm}</li>
    ));
    return (
      <div>
        <h2>Lista ofert</h2>
        <ul>{data}</ul>
      </div>
    );
  }
}

export default MainTable;
