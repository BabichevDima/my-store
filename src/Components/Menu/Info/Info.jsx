import React from "react";
import styled from "@emotion/styled";

export const Info = (props) => {
  return (
    <Wrap>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, qui
        autem libero assumenda doloremque ipsum voluptatum perferendis. At,
        omnis dicta iure praesentium quibusdam officia cum quos iste, saepe in
        corporis!
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  text-align: center;
  margin-bottom: 20px;
  border: 1px solid red;
`;
