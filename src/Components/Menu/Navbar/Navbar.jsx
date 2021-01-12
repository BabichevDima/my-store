import React from "react";
import styled from "@emotion/styled";
import Logo from "../../../../src/image/Logo.png";
import Search from "../../../../src/image/Search.png";
import Shopping from "../../../../src/image/Shopping.png";
import Profile from "../../../../src/image/Profile.png";
import { NavLink } from "react-router-dom";
import "../../../App.css";

export const Navbar = (props) => {
  return (
    <Wrap>
      <Icon src={Logo} />
      <NavLink component="a" to="/men" className="li">
        Men
      </NavLink>
      <NavLink component="a" to="/women" className="li">
        Women
      </NavLink>
      <NavLink component="a" to="/sale" className="li">
        Sale!
      </NavLink>
      <NavLink component="a" to="/info" className="li">
        Info
      </NavLink>
      <NavLink component="a" to="/contacts" className="li">
        Contacts
      </NavLink>
      <Icon src={Search} />
      <Icon src={Shopping} />
      <Icon src={Profile} />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 940px;
  background-color: #3c5569;
  margin: auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  padding: 15px 20px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;
