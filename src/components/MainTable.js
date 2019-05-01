import React, { Component } from "react";
import "./mainTable.css";
class MainTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text
    };
  }

  render() {
    const data = this.props.data.map((offer, i) => (
      <div
        className="row"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-offset="0"
        key={i}
      >
        <div>{offer.firm}</div>
        <div>
          <a href={offer.www} target="_blank">
            {offer.www}
          </a>
        </div>
        <div>e-mail</div>
        <div>{offer.queryDate}</div>
        <div>{offer.CVDate}</div>
        <div>
          <button onClick={() => this.props.handleRemoveButton(i)}>Usuń</button>
        </div>
        <div>
          <button onClick={() => this.props.handleEditButton(i)}>Edytuj</button>
        </div>
      </div>
    ));
    return (
      <div className="mainTable" data-aos="fade-up">
        <h2> Lista ofert </h2>{" "}
        <div className="offerList">
          <div className="row title">
            <div>Nazwa Firmy</div>
            <div>Strona WWW</div>
            <div>E-mail</div>
            <div>Zapytanie</div>
            <div>CV</div>
          </div>
          {data}{" "}
        </div>
      </div>
    );
  }
}

export default MainTable;
