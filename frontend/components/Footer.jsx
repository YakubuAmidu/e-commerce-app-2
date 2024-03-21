import { View, Text } from "react-native";
import React from "react";

import { useNavigate } from "@react-navigation/native";

const Footer = ({ activeRoute = "home" }) => {
  const navigate = useNavigate();

  const isAuthenticated = true;

  return (
    <View>
      <Text>Footer</Text>
    </View>
  );
};

export default Footer;
