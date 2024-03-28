import { View, Text } from "react-native";
import React from "react";

import Header from "../components/Header.jsx";
import { defaultStyle } from "../styles/styles.js";

const ConfirmOrder = () => {
  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <Text>ConfirmOrder</Text>
    </View>
  );
};

export default ConfirmOrder;
