import React, { useState, Fragment } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";

import { defaultStyle, colors } from "../styles/styles";
import Header from "../components/Header.jsx";
import SearchModal from "../components/SearchModal.jsx";
import ProductCard from "../components/ProductCard.jsx";
import Heading from "../components/Heading.jsx";
import Footer from "../components/Footer.jsx";

import { useNavigation } from "@react-navigation/native";

const categories = [
  { category: "Men shoes", _id: "9efh9fhnvr9j" },
  { category: "Bags", _id: "9n9hevnrh8rj" },
  { category: "Womens makeup", _id: "einoiwe[8939efon" },
  { category: "Sunglasses", _id: "90nv903h8vh" },
];

const products = [
  {
    price: 1223,
    name: "Sample...",
    stock: 23,
    _id: "eoie9envi9ev",
    images: [
      {
        uri: "https://m.media-amazon.com/images/I/61dV53UuRVS.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      },
    ],
  },

  {
    price: 1223,
    name: "Macbook pro...",
    stock: 23,
    _id: "eivnieufgvnbie9847r",
    images: [
      {
        uri: "https://m.media-amazon.com/images/I/61dV53UuRVS.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      },
    ],
  },
];

const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigation();

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCartHandler = (id) => {
    console.log("Add to cart...");
  };

  return (
    <Fragment>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}

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
          <Heading text1="Our" text2="Products" />

          {/*Search Bar*/}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
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

        {/*Products*/}
        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                key={item._id}
                id={item._id}
                image={item.images[0]?.uri}
                addToCartHandler={item.addToCartHandler}
                navigate={navigate}
                i={index}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      <Footer activeRoute={"home"} />
    </Fragment>
  );
};

export default Home;
