import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigate } from "@react-navigation/native";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";

const Footer = ({ activeRoute = "home" }) => {
  const navigate = useNavigate();

  const isAuthenticated = true;

  const navigationHandler = (key) => {};

  const avatarOptions = {
    color: colors.color2,
    size: 50,
    backgroundColor: colors.color1,
  };

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
          {...avatarOptions}
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigationHandler(2)}
        >
          {...avatarOptions}
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: "absolute",
          width: 80,
          height: 80,
          backgroundColor: colors.color2,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
          top: -50,
          alignSelf: "center",
        }}
      >
        <View
          style={{
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigationHandler(0)}
          >
            <Avatar.Icon
              color={colors.color2}
              size={50}
              style={{ backgroundColor: colors.color1 }}
              icon={activeRoute === "home" ? "home" : "home-outline"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Footer;
