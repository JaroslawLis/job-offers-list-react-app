import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const Navigtation = () => {
  return (
    <header>
      <h4>Nazwa aplikacji</h4>

      <NavLink to="/">Strona główna</NavLink>
      <NavLink to="/add">Dodaj firmę</NavLink>
      <NavLink to="/info">Info</NavLink>
      <NavLink to="/stat">Statystyka</NavLink>
    </header>
  );
};

export default Navigtation;
