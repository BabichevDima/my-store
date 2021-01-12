import React from "react";
import styled from "@emotion/styled";
import Logo from "../../../src/image/Logo.png";

export const Header = (props) => {
  return (
    <Wrap>
      <Icon src={Logo} />
      <Name>Lucky Store</Name>
      <Description>E–commerce ui Kit</Description>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: #31485b;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 15px;
  margin-bottom: 50px;
`;

const Icon = styled.img`
  margin-bottom: 8px;
  animation: App-logo-spin infinite 20s linear;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Name = styled.div`
  font-size: 28px;
  padding-bottom: 13px;
  border-bottom: 1px solid #fff;
  margin-bottom: 10px;
  color: #fff;
`;

const Description = styled.div`
  font-size: 18px;
  padding-bottom: 13px;
  color: #fff;
`;
