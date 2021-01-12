import React from "react";
import styled from "@emotion/styled";
import { Phone } from "./Phone/Phone";
import iPhone from "../../../../src/image/image-men/1.jpg";
import Samsung from "../../../../src/image/image-men/2.jpg";
import LG from "../../../../src/image/image-men/3.jpg";
import Sony from "../../../../src/image/image-men/4.jpg";

const Phones = {
  one: iPhone,
  two: Samsung,
  three: LG,
  fore: Sony,
};

export const Men = (props) => {
  return (
    <Wrap>
      <Phone phones={Phones}/>
    </Wrap>
  );
};

const Wrap = styled.div`
  text-align: center;
  margin-bottom: 20px;
  border: 1px solid red;
`;
