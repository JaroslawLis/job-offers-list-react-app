import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigtation = () => {
  return (
    <header>
      <h4>Looking for a Job </h4>
      <NavLink to="/"> Strona główna </NavLink>{" "}
      <NavLink to="/add"> Dodaj firmę </NavLink>{" "}
      <NavLink to="/info"> Info </NavLink>{" "}
      <NavLink to="/stats"> Statystyka </NavLink>{" "}
    </header>
  );
};

export default Navigtation;
