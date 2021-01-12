import React from "react";
import styled from "@emotion/styled";
import Images from "../../../../src/image/images.jpg";

export const Sale = (props) => {
  return (
    <Wrap>
      <Icon src={Images} />
    </Wrap>
  );
};

const Wrap = styled.div`
  text-align: center;
  margin-bottom: 20px;
  border: 1px solid red;
`;

const Icon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
