import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { defautStyle, formHeading } from "../styles/styles";
import { Avatar } from "react-native-paper";

import ButtonBox from "../components/ButtonBox";

const user = {
  name: "Yakubu",
  email: "yakubu@gmail.com",
};

const Profile = () => {
  const [avatar, setAvatar] = useState("");

  const navigateHandler = () => {};

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
        <TouchableOpacity
          onPress={
            (() => navigation.navigate("camera"), { updateProfile: true })
          }
        >
          <Button textColor={colors.color1}>Change photo</Button>
        </TouchableOpacity>
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={{ fontWeight: "300", color: colors.color2 }}>
          {user?.email}
        </Text>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            justifyContent: "space-between",
          }}
        >
          <ButtonBox
            handler={navigateHandler}
            text={"Orders"}
            icon={"format-list-bulleted-square"}
          />
          <ButtonBox
            handler={navigateHandler}
            icon={"view-dashboard"}
            text={"admin"}
            reverse={true}
          />
          <ButtonBox
            handler={navigateHandler}
            text={"profile"}
            icon={"pencil"}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            justifyContent: "space-evenly",
          }}
        >
          <ButtonBox
            handler={navigateHandler}
            text={"password"}
            icon={"pencil"}
          />
          <ButtonBox
            handler={navigateHandler}
            text={"sign out"}
            icon={"exit-to-app"}
          />
        </View>
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
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: colors.color2,
  },
});

export default Profile;
