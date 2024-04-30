import { View, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigate } from "@react-navigation/native";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";

const Footer = ({ activeRoute = "home" }) => {
  const navigate = useNavigate();

  const loading = false;
  const isAuthenticated = true;

  const navigationHandler = (key) => {
    switch (key) {
      case 0:
        navigate.navigate("home");
        break;
      case 1:
        navigate.navigate("cart");
        break;
      case 2:
        if (isAuthenticated) navigate.navigate("profile");
        else navigate.navigate("login");
      default:
        navigate.navigate("home");
        break;
    }
  };

  const avatarOptions = {
    color: colors.color2,
    size: 50,
    backgroundColor: colors.color1,
  };

  return (
    loading === false && (
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
              {...avatarOptions}
              Icon={activeRoute === "cart" ? "shopping" : "shopping-outline"}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigationHandler(2)}
          >
            <Avatar.Icon
              {...avatarOptions}
              Icon={
                isAuthenticated === true
                  ? "login"
                  : activeRoute === "profile"
                  ? "account"
                  : "account-outline"
              }
            />
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
              {...avatarOptions}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  );
};

export default Footer;
