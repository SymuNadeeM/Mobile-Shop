import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FaMobileAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
// import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <Link to="/" className="nav-logo">
          <FaMobileAlt />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="cardholder">
          <ButtonContainer>
            <span className="spancard">
              <FiShoppingCart />
            </span>
            My card
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}
