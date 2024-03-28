import React from "react";
import { View, Text } from "react-native";

const CartItem = ({
  name,
  id,
  amount,
  stock,
  incrementHandler,
  decrementHandler,
  index,
  imgSrc,
}) => {
  return (
    <View>
      <Text>CartItems</Text>
    </View>
  );
};

export default CartItem;
