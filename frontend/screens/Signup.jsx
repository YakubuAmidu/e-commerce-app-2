import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, Fragment } from "react";
import { TextInput, Button, Avatar } from "react-native-paper";

import {
  defaultStyle,
  colors,
  FormHeading,
  inputOptions,
  defaultImg,
  formStyles as styles,
} from "../styles/styles";
import Footer from "../components/Footer";

const Signup = ({ navigation }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  const loading = false;

  const submitHandler = () => {
    alert("Yeah");
    // Will remove this in the future.
    navigation.navigate("verify");
  };

  return (
    <Fragment>
      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={FormHeading}>Sign up</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndictor={false}
          style={{
            padding: 20,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.color3,
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <Avatar.Image
              style={{ alignSelf: "center", backgroundColor: colors.color1 }}
              size={80}
              source={{
                uri: avatar ? avatar : defaultImg,
              }}
            />

            <TouchableOpacity onPress={() => navigation.navigate("camera")}>
              <Button textColor={colors.color1}>Change photo</Button>
            </TouchableOpacity>
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
        </ScrollView>
      </View>

      <Footer activeRoute="profile" />
    </Fragment>
  );
};

export default Signup;
