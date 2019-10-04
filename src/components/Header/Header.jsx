import React, { Component } from "react";

import { Link } from "react-router-dom";
import { Container, Cart } from "./style";
import logo from "../../assets/logo.svg";
import { MdShoppingCart as Icon } from "react-icons/md";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Cart to="/cart">
          <div>
            <strong>meu carrinho</strong>
            <small>3 items</small>
          </div>
          <Icon size={36} color="#fff" />
        </Cart>
      </Container>
    );
  }
}
