import React from "react";
import "./App.css";
import styled from "@emotion/styled";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Menu } from "./Components/Menu/Menu";

export function App() {
  return (
    <Wrapper>
      <Header />
      <Menu />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto;
  width: 1160px;
  padding: 50px 35px;

`;
