import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { colors } from "../styles/styles";

const ProductCard = ({
  stock,
  name,
  price,
  id,
  image,
  addToCartHandler,
  navigate,
}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          elevation: 5,
          width: 220,
          alignItems: "center",
          justifyContent: "space-between",
          margin: 20,
          borderRadius: 20,
          height: 400,
          backgroundColor: i % 2 === 0 ? colors.color1 : colors.color2,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: 200,
            resizeMode: "contain",
            position: "absolute",
            left: 50,
            top: 105,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            padding: 20,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontWeight: "300",
              fontSize: 25,
            }}
          >
            {name}
          </Text>

          <Text
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontWeight: '700',
              fontSize: 20,
            }}
          >
            $ {price}
          </Text>
        </View>

        
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
