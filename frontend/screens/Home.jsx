import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";

import { defaultStyle, colors } from "../styles/styles";
import Header from "../components/Header";

const categories = [
  { category: "Men shoes", _id: "9efh9fhnvr9j" },
  { category: "Bags", _id: "9n9hevnrh8rj" },
  { category: "Womens makeup", _id: "einoiwe[8939efon" },
  { category: "Sunglasses", _id: "90nv903h8vh" },
];

const [category, setCategory] = useState("");

const categoryButtonHandler = (id) => {
  setCategory(id);
};

const Home = () => {
  return (
    <View style={defaultStyle}>
      <Header />

      {/*Heading Row*/}
      <View
        style={{
          paddingTop: 70,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/*Heading*/}
        <View>
          <Text style={{ fontSize: 25 }}>Our</Text>
          <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
        </View>
        {/*Search Bar*/}
        <View>
          <TouchableOpacity>
            <Avatar.Icon
              icon={"magnify"}
              color={"gray"}
              size={50}
              style={{ backgroundColor: colors.color2, elevation: 12 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/*Categories*/}
      <View style={{ flexDirection: "row", height: 80 }}>
        <ScrollView
          contentContainerStyle={{ alignItems: "center" }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((item, index) => (
            <Button
              key={item._id}
              style={{
                backgroundColor:
                  category === item._id ? colors.color1 : colors.color5,
                borderRadius: 100,
                margin: 5,
              }}
              onPress={() => categoryButtonHandler(item._id)}
            >
              <Text
                style={{
                  fontSize: 12,
                  coolor: category === item._id ? colors.color2 : "gray",
                }}
              >
                {item.category}
              </Text>
            </Button>
          ))}
        </ScrollView>
      </View>

      
    </View>
  );
};

export default Home;
