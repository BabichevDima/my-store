import React from "react";
import styled from "@emotion/styled";
import Sale from "../../../../src/image/Sale.png";


export const Discount = (props) => {
  return (
    <Wrap>
      <Icon src={Sale} />
    </Wrap>
  );
};


const Wrap = styled.div`
text-align: center;
margin-bottom: 20px;
border: 1px solid red;
`;

const Icon = styled.img`
  width: 400px;
  height: 220px;
  &:hover {
    cursor: pointer;
  }
`;

