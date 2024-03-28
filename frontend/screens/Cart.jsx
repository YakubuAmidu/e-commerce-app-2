import React from "react";
import { View, Text } from "react-native";

import { defaultStyle } from "../styles/styles";
import Header from "../components/Header.jsx";

const Cart = () => {
  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      {/*Header*/}
      <Header back={true} emptyCart={true} />

      {/*Heading*/}
      <Heading />
      <Text>Cart...</Text>
    </View>
  );
};

const Heading = () => {};

export default Cart;
