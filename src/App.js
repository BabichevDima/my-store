import React, { createContext, useState } from "react";
import "./App.css";
import styled from "@emotion/styled";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Menu } from "./Components/Menu/Menu";

export const MyContest = createContext();

const dark = {
  N100: "#fff",
  N200: "#000",
}

const light = {
  N100: "#000",
  N200: "#fff",
}

export function App() {
  const [darkTheme, switchTheme] = useState(false)
  return (
    <MyContest.Provider value={darkTheme ? dark : light}>
      <Wrapper>
        <button onClick={() => switchTheme(!darkTheme)}>Change theme</button>
        <Header menu={["men", "Women"]}/>
        <Menu />
        <Footer />
      </Wrapper>
    </MyContest.Provider>
  );
}

const Wrapper = styled.div`
  margin: auto;
  width: 1160px;
  padding: 50px 35px;
`;
