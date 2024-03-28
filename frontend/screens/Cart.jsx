import React from "react";
import { View, Text } from "react-native";

import { Button } from "react-native-paper";

import { defaultStyle, colors } from "../styles/styles";
import Header from "../components/Header.jsx";
import Heading from "../components/Heading.jsx";

const cartItems = [
  {
    name: "Macbook Pro",
    image:
      "https://t4.ftcdn.net/jpg/02/28/32/33/360_F_228323384_jgQfK454eYmShdFytnLz082RE5HEdLzD.jpg",
    product: "oe9e9vn9evhr9e4vrhvb",
  },
];

const Cart = () => {
  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      {/*Header*/}
      <Header back={true} emptyCart={true} />

      {/*Heading*/}
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ paddingTop: 75, marginLeft: 35 }}
      />
      <View style={{ paddingVertical: 20, flex: 1 }}></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text>$ 500</Text>
      </View>

      <TouchableOpacity>
        <Button
          icon={"cart"}
          textColor={colors.color2}
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
