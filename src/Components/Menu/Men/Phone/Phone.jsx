import React from "react";
import styled from "@emotion/styled";

export const Phone = ({ phones }) => {
  return (
    <Wrap>
      <Img src={phones.one} />
    </Wrap>
  );
};

//   const allPhone = phones.map(() => {
//     return (
//       <Wrap>
//         <Img src={allPhone} />
//       </Wrap>
//     );
//   });
// };

const Wrap = styled.div``;

const Img = styled.img`
  width: 200px;
  height: 250px;
  text-align: center;
  margin-bottom: 20px;
`;
