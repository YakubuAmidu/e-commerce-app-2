import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigate } from "@react-navigation/native";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";

const Footer = ({ activeRoute = "home" }) => {
  const navigate = useNavigate();

  const isAuthenticated = true;

  const navigationHandler = (key) => {};

  return (
    <View
      style={{
        backgroundColor: colors.color1,
        borderTopRightRadius: 120,
        borderTopLeftRadius: 120,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigationHandler(1)}
        >
          <Avatar.Icon
            size={50}
            color={colors.color2}
            style={{ backgroundColor: colors.color1 }}
            icon={activeRoute === "cart" ? "shopping" : "shopping-outline"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigationHandler(2)}
        >
          <Avatar.Icon
            size={50}
            color={colors.color2}
            style={{ backgroundColor: colors.color1 }}
            icon={activeRoute === "profile" ? "account" : "shopping-outline"}
          />
        </TouchableOpacity>
      </View>

      <View></View>
    </View>
  );
};

export default Footer;
