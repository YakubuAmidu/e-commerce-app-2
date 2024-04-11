import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, Fragment } from "react";
import { TextInput, Button } from "react-native-paper";

import { defaultStyle, colors, FormHeading } from "../styles/styles";

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const loading = false;

  const submitHandler = () => {
    alert("Yeah");
  };

  return (
    <Fragment>
      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={FormHeading}>Forget Password</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Email..."
            keyboardType="email address"
            value={email}
            onChangeText={setEmail}
          />

          <Button
            loading={loading}
            textColor={colors.color2}
            style={styles.btn}
            disabled={email === ""}
            onPress={submitHandler}
          >
            Send OTP
          </Button>

          <Text style={styles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("signup")}
          >
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  forget: {
    color: colors.color2,
    marginHorizontal: 20,
    marginVertical: 10,
    alignSelf: "flex-end",
    fontWeight: 100,
  },
  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 10,
  },
  or: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "100",
    color: colors.color2,
  },
  link: {
    alignSelf: "center",
    color: colors.color2,
    fontSize: 18,
    textTransform: "uppercase",
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
export default ForgetPassword;
