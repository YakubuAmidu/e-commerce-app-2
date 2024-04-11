import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, Fragment } from "react";
import { TextInput, Button } from "react-native-paper";

import {
  defaultStyle,
  colors,
  FormHeading,
  inputOptions,
  formStyles as styles,
} from "../styles/styles";

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
            onPress={() => navigation.navigate("login")}
          >
            <Text style={styles.link}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </Fragment>
  );
};

export default ForgetPassword;
