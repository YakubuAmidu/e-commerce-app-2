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

const Verify = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const loading = false;

  const submitHandler = () => {
    alert("Yeah");
    // Will remove this in the future.
    navigation.navigate("login");
  };

  return (
    <Fragment>
      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={FormHeading}>Reset Password</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="OTP"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
          />
          <TextInput
            {...inputOptions}
            placeholder="New password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <Button
            loading={loading}
            textColor={colors.color2}
            style={styles.btn}
            disabled={otp === "" || password === ""}
            onPress={submitHandler}
          >
            Reset
          </Button>

          <Text style={styles.or}>OR</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={styles.link}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </Fragment>
  );
};

export default Verify;
