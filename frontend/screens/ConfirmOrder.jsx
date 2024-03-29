import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import React from "react";

import Header from "../components/Header.jsx";
import ConfirmOrderItem from "../components/ConfirmOrderItem.jsx";
import { defaultStyle } from "../styles/styles.js";
import { cartItems } from "./Cart";

const ConfirmOrder = () => {
  const navigate = useNavigation();

  const itemPrice = 400;
  const shippingCharges = 200;
  const tax = 0.18 * itemPrice;
  const totalAmount = itemPrice + shippingCharges + tax;

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

      <PriceTag heading={"subtotal"} value={itemPrice} />
      <PriceTag heading={"shipping"} value={shippingCharges} />
      <PriceTag heading={"tax"} value={tax} />
      <PriceTag heading={"total"} value={totalAmount} />

      <TouchableOpacity
        onPress={() =>
          navigate.navigate("payment", {
            itemPrice,
            shippingCharges,
            tax,
            totalAmount,
          })
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 10,
          }}
          textColor={colors.color2}
          icon={"chevron-right"}
        >
          Payment
        </Button>
      </TouchableOpacity>
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
