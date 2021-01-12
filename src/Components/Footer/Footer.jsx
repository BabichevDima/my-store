import React from "react";
import styled from "@emotion/styled";

export const Footer = (props) => {
  return (
    <Wrap>
      <FooterName>Created by Dmitry Babichev</FooterName>
    </Wrap>
  );
};



const FooterName = styled.div`
  font-size: 18px;
  padding-bottom: 15px;
  color: white;
`;

const Wrap = styled.div`
  background-color: #3c5569;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 15px;
`;