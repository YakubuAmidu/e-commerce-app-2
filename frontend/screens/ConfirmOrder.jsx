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
          {cartItems.map((i) => (
            <ConfirmOrderItem
              key={i.product}
              price={i.price}
              name={i.name}
              image={i.image}
              quantity={i.quantity}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const PriceTag = ({ heading, value }) => {
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 5,
    }}
  >
    <Text style={{ fontWeight: "800" }}>{heading}</Text>
    <Text>$ {value}</Text>
  </View>;
};

export default ConfirmOrder;
