import {
  View,
  Text,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";
import { colors } from "../styles/styles";

const SearchModal = ({
  searchQuery,
  setSearchQuery,
  setActiveSearch,
  products = [],
}) => {
  const navigate = useNavigation();

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        zIndex: 100,
        backgroundColor: colors.color2,
        padding: 35,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <Searchbar
          placeholder="Search..."
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
          style={{ marginTop: 20 }}
        />

        <ScrollView>
          <View style={{ paddingVertical: 40, paddingHorizontal: 10 }}>
            {products.map((i) => (
              <SearchItem
                key={i._id}
                imgSrc={i.images[0]?.url}
                name={i.name}
                price={i.price}
                handler={() =>
                  navigate.navigate("productdetails", { id: i._id })
                }
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const SearchItem = ({ name, price, imgSrc, handler }) => (
  <TouchableOpacity onPress={handler}>
    <View
      style={{
        padding: 20,
        borderRadius: 10,
        backgroundColor: colors.color2,
        elevation: 5,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
        marginVertical: 30,
      }}
    >
      <Image
        source={{
          uri: imgSrc,
        }}
        style={{
          width: 80,
          height: 80,
          position: "absolute",
          resizeMode: "contain",
          top: -15,
          left: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      />
    </View>
  </TouchableOpacity>
);

export default SearchModal;
