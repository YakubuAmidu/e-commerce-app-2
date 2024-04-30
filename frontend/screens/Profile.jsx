import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { defautStyle, formHeading } from "../styles/styles";

const Profile = () => {
  return (
    <View style={defautStyle}>
      {/* Heading */}
      <View style={{ marginBottom: 20 }}>
        <Text style={formHeading}>Profile</Text>
      </View>
      {/* Loading */}
      <View style={styles.container}></View>
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
