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

const UpdateProfile = ({ navigation }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  const loading = false;

  const disableBtn =
    !name || !email || !password || !address || !city || !country || !pinCode;

  const submitHandler = () => {
    alert("Yeah");
    // Will remove this in the future.
    navigation.navigate("verify");
  };

  return (
    <View style={defaultStyle}>
      {/* Heading */}
      <View style={{ marginBottom: 20 }}>
        <Text style={FormHeading}>Edit Profile</Text>
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
        <View style={{ minHeight: 900 }}>
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
            placeholder="Name..."
            value={name}
            onChangeText={setName}
          />

          <TextInput
            {...inputOptions}
            placeholder="Email..."
            keyboardType="email address"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            {...inputOptions}
            secureTextEntry={true}
            placeholder="Password..."
            value={password}
            onChangeText={setPassword}
          />

          <TextInput
            {...inputOptions}
            placeholder="Addressl..."
            value={address}
            onChangeText={setAddress}
          />

          <TextInput
            {...inputOptions}
            placeholder="City..."
            value={city}
            onChangeText={setCity}
          />

          <TextInput
            {...inputOptions}
            placeholder="Countryl..."
            value={country}
            onChangeText={setCountry}
          />

          <TextInput
            {...inputOptions}
            placeholder="Pincode..."
            value={pinCode}
            onChangeText={setPinCode}
          />

          <Button
            loading={loading}
            textColor={colors.color2}
            style={styles.btn}
            disabled={disableBtn}
            onPress={submitHandler}
          >
            Update
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;
