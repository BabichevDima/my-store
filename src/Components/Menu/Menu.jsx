import React from "react";
import styled from "@emotion/styled";
import { Navbar } from "./Navbar/Navbar";
import { Discount } from "./Discount/Discount";
import { Men } from "./Men/Men";
import { Women } from "./Women/Women";
import { Sale } from "./Sale/Sale";
import { Info } from "./Info/Info";
import { Contacts } from "./Contacts/Contacts";
import { BrowserRouter, Route } from "react-router-dom";

export const Menu = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Discount />

      <Route path="/men" component={Men} />
      <Route path="/women" component={Women} />
      <Route path="/sale" component={Sale} />
      <Route path="/info"component={Info} />
      <Route path="/contacts"component={Contacts} />

    </BrowserRouter>
  );
};
