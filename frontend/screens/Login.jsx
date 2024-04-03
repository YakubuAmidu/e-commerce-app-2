import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";

import { defaultStyle, colors, inputStyling } from "../styles/styles";

const inputOptions = {
  style: inputStyling,
  mode: "outlined",
  activeOutlineColor: colors.color1,
};

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loading = false;

  const submitHandler = () => {
    alert("Yeah");
  };

  return (
    <View style={defaultStyle}>
      {/* Heading */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.heading}>Login</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          {...inputOptions}
          placeholder="Email..."
          keyboardType="email address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          {...inputOptions}
          placeholder="Password..."
          secureTextEntry={true}
          value={password}
          onChange={setPassword}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("forgotpassword")}
        >
          <Text style={styles.forget}>Forgot Password ? </Text>
        </TouchableOpacity>

        <Button
          loading={loading}
          textColor={colors.color2}
          style={styles.btn}
          disabled={email === "" || password === ""}
          onPress={submitHandler}
        >
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: 600,
    textAlign: "center",
    backgroundColor: colors.color3,
    color: colors.color2,
    padding: 5,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.color3,
    borderRadius: 10,
    elevation: 10,
    justifyContent: "center",
  },
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
});
export default Login;
