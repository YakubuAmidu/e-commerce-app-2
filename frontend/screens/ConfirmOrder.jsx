import { View, Text, ScrollView } from "react-native";
import React from "react";

import Header from "../components/Header.jsx";
import ConfirmOrderItem from "../components/ConfirmOrderItem.jsx";
import { defaultStyle } from "../styles/styles.js";
import { cartItems } from "./Cart";

const ConfirmOrder = () => {
  return (
    <View style={defaultStyle}>
      <Header back={true} />

      {/*Heading*/}
      <Heading
        containerStyle={{ paddingTop: 70 }}
        text1="cofirm"
        text2="Order"
      />

      <View style={{ paddingVertical: 20, flexx: 1 }}>
        <ScrollView>
          {cartItems.map((item, index) => (
            <ConfirmOrderItem />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ConfirmOrder;
