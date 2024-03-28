import React from "react";
import { View, Text, Image } from "react-native";

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
        <Image source={{ uri: imgSrc }} style={{ width: 200, heitght: '100%', resizeMode="contain" top: '-20%', left: '10%' }} />
      </View>

      <View style={{ width: '40%', paddingHorizontal: 25, }}>
        <Text numberOfLines={1} style={{ fontSize: 17 }}>{name}</Text>
      </View>
    </View>
  );
};

export default CartItem;
