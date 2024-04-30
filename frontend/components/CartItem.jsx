import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { iconOptions } from "./ProductDetails";

const CartItem = ({
  name,
  id,
  amount,
  stock,
  incrementHandler,
  decrementHandler,
  navigate,
  index,
  imgSrc,
}) => {
  return (
    <View style={{ flexDirection: "row", heitght: 100, marginVertical: 20 }}>
      <View
        style={{
          width: "40%",
          backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <Image source={{ uri: imgSrc }} style={styles.img} />
      </View>

      <View style={{ width: "40%", paddingHorizontal: 25 }}>
        <Text
          numberOfLines={1}
          style={{ fontSize: 17 }}
          onPress={() => navigation.navigate("productDetails", { id })}
        >
          {name}
        </Text>
        <Text numberOfLines={1} style={{ fontSize: 17, fontWeight: "900" }}>
          $ {price}
        </Text>
      </View>

      <View style={qtyContainer}>
        <TouchableOpacity onPress={() => decrementHandler(id, qty)}>
          <Avatar.Icon icon={"minus"} {...iconOptions} />
        </TouchableOpacity>
        <Text style={styles.qtyText}>{qty}</Text>
        <TouchableOpacity onPress={() => incrementHandler(id, qty, stock)}>
          <Avatar.Icon icon={"plus"} {...iconOptions} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  qtyText: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
  qtyContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "20%",
    height: 80,
  },
  img: {
    width: 200,
    height: "100%",
    resizeMode: "contain",
    top: "-20%",
    left: "10%",
  },
});

export default CartItem;
