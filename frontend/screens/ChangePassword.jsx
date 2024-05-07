import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, Fragment } from "react";
import { TextInput, Button } from "react-native-paper";

import {
  defaultStyle,
  colors,
  FormHeading,
  formStyles as styles,
} from "../styles/styles";
import Header from "../components/Header.jsx";

const ChangePassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const loading = false;

  const submitHandler = () => {
    alert("Yeah");
  };

  return (
    <View style={defaultStyle}>
      <Header back={true} />
      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={FormHeading}>Change Password</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          {...inputOptions}
          placeholder="Old Password..."
          secureTextEntry={true}
          value={oldPassword}
          onChange={setOldPassword}
        />

        <TextInput
          {...inputOptions}
          placeholder="New Password..."
          secureTextEntry={true}
          value={newPassword}
          onChange={setNewPassword}
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
          disabled={oldPassword === "" || newPassword === ""}
          onPress={submitHandler}
        >
          Change
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
export default ChangePassword;
