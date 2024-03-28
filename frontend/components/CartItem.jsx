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
        <Image
          source={{ uri: imgSrc }}
          style={{
            width: 200,
            height: "100%",
            resizeMode: "contain",
            top: "-20%",
            left: "10%",
          }}
        />
      </View>

      <View style={{ width: "40%", paddingHorizontal: 25 }}>
        <Text numberOfLines={1} style={{ fontSize: 17 }}>
          {name}
        </Text>
        <Text numberOfLines={1} style={{ fontSize: 17, fontWeight: "900" }}>
          $ {price}
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          width: "20%",
          height: 80,
        }}
      >
        <TouchableOpacity onPress={decrementHandler(id, qty)}>
          <Avatar.Icon icon={"minus"} {...iconOptions} />
          <Text
            style={{
              backgroundColor: colors.color4,
              height: 25,
              width: 25,
              textAlignVertical: "center",
              textAlign: "center",
              borderWidth: 1,
              borderRadius: 5,
              borderColor: colors.color5,
            }}
          >
            {qty}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
