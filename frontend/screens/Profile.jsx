import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { defautStyle, formHeading } from "../styles/styles";
import { Avatar } from "react-native-paper";

const Profile = () => {
  const [avatar, setAvatar] = useState("");

  return (
    <View style={defautStyle}>
      {/* Heading */}
      <View style={{ marginBottom: 20 }}>
        <Text style={formHeading}>Profile</Text>
      </View>
      {/* Loading */}
      <View style={styles.container}>
        <Avatar.Image
          source={{
            uri: avatar,
          }}
          size={100}
          style={{ backgroundColor: colors.color1 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default Profile;
