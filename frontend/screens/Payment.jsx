import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { defaultStyle, colors } from "../styles/styles";

import Header from "../components/Header.jsx";
import Heading from "../components/Heading.jsx";
import { RadioButton } from "react-native-paper";

const Payment = ({ navigation, route }) => {
  const navigate = useNavigation();

  return (
    <View style={{ defaultStyle }}>
      <Header back={true} />
      <Heading
        containerStyle={{ paddingTop: 70 }}
        text1="payment"
        text2="method"
      />
      <View style={styles.container}>
        <RadioButton.Group>
          <View style={styles.radioStyle}>
            <Text style={styles.radioStyleText}>Cash on delivery</Text>
            <RadioButton color={colors.color1} value={"COD"} />
          </View>
        </RadioButton.Group>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color2,
    padding: 30,
    borderRadius: 10,
    marginVertical: 20,
    flex: 1,
    justifyContent: "center",
  },
  radioStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  radioStyleText: {
    fontWeight: 600,
    fontSize: 18,
    textTransform: "uppercase",
    color: colors.color2,
  },
});

export default Payment;
