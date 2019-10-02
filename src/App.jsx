import React from "react";

import GlobalStyle from "./style/globalStyle";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";

export default function app() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}
