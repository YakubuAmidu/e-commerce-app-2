import React, { Fragment } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";

const Header = () => {
  return (
    <Fragment>
      <TouchableOpacity style={{ position: "absolute" }}>
        <Avatar.Icon
          style={{ backgroundColor: colors.color4 }}
          icon={"arrow-left"}
          color={colors.color3}
        />
      </TouchableOpacity>
    </Fragment>
  );
};

export default Header;
