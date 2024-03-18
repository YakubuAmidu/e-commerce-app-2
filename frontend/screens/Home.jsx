import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";

import { defaultStyle, colors } from "../styles/styles";
import Header from "../components/Header";

const Home = () => {
  const categories = [
    {
      category: "Shoes",
      _id: "e00ej9whf8ee8",
    },
    {
      category: "Sunglasses",
      _id: "e00ej9wiebguriefuur",
    },
    {
      category: "Bags",
      _id: "e038fhgvruv84",
    },
    {
      category: "Makeup",
      _id: "e00e8fhvr84efhgr8",
    },
  ];

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
                backgroundColor: colors.color5,
                borderRadius: 100,
                margin: 5,
              }}
            >
              <Text style={{ fontSize: 12, coolor: "gray" }}>
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
