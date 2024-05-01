import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { colors } from "../styles/styles";

const ButtonBox = ({
  icon,
  text,
  handler,
  reverse = false,
  loading = false,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: reverse ? colors.color1 : colors.color3,
        height: 80,
        width: 80,
        borderRadius: 20,
        alignItems: "center",
      }}
      onPress={() => handler(text)}
      disabled={loading}
    >
      <Avatar.Icon
        size={50}
        color={colors.color2}
        style={{ backgroundColor: reverse ? colors.color1 : colors.color2 }}
      />
    </TouchableOpacity>
  );
};

export default ButtonBox;
