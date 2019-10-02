import React from "react";

import GlobalStyle from "./style/globalStyle";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header/index";

export default function app() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes />
      </Router>
    </>
  );
}
