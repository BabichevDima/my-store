import React from "react";
import styled from "@emotion/styled";

export const Phone = ({ phones }) => {
  return (
    <Wrap>
      {phones.map((imgUrl) => (
        <Img src={imgUrl} />
      ))}
    </Wrap>
  );
};

const Wrap = styled.div``;

const Img = styled.img`
  width: 200px;
  height: 250px;
  text-align: center;
  margin-bottom: 20px;
`;
