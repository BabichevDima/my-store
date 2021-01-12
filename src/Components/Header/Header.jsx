import React from "react";
import styled from "@emotion/styled";
import Logo from "../../../src/image/Logo.png";
import { MyContest } from "../../App";
import { connect } from "react-redux";

const HeaderComponent = (props) => {
  console.log(
    "🚀 ~ file: Header.jsx ~ line 8 ~ HeaderComponent ~ props",
    props
  );

  return (
    <Wrap>
      <button onClick={() => props.addToCart({ id: 2, count: 1 })}>
        Add to cart
      </button>
      <button onClick={() => props.returnFromCart(1)}>remove from cart</button>
      <Icon src={Logo} />
      <Name>Lucky Store</Name>
      <MyContest.Consumer>
        {(theme) => {
          return <Description theme={theme}>E–commerce ui Kit</Description>;
        }}
      </MyContest.Consumer>
    </Wrap>
  );
};

const mapStateToProps = (store) => {
  return { goodsInCart: store.cartStore.goods };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (payload) => dispatch({ type: "ADD_GOOD_IN_CART", payload }),
    returnFromCart: (payload) =>
      dispatch({ type: "REMOVE_GOOD_FROM_CART", payload }),
  };
};

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);

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
  color: ${({ theme }) => theme.N100};
  background-color: ${({ theme }) => theme.N200};
`;
