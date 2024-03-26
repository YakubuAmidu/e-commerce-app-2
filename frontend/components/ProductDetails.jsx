import { useRef } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { Avatar } from "react-native-paper";

import Carousel from "react-native-snap-carousel";

import { colors, defaultStyle } from "../styles/styles";
import Header from "./Header.jsx";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

const ProductDetails = ({ route: { params } }) => {
  console.log(params.id);

  const name = "Macbook Pro";
  const description = "This is the macbook pro in the market...";
  const price = 500;

  const isCarousel = useRef(null);

  const images = [
    {
      id: "ooe9388hvr8",
      uri: "https://m.media-amazon.com/images/I/61dV53UuRVS.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: "9ejh8vbn8ebvr",
      uri: "https://m.media-amazon.com/images/I/61dV53UuRVS.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    },
  ];

  return (
    <View
      style={{ ...defaultStyle, padding: 0, backgroundColor: colors.color1 }}
    >
      <Header back={true} />

      {/*Carousel*/}
      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />
      <View
        style={{
          backgroundColor: colors.color1,
          flex: 1,
          padding: 35,
          marginTop: -380,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
        }}
      >
        <Text numberOfLines={2} style={{ fontSize: 25 }}>
          {name}
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>{price}</Text>

        <Text
          numberOfLines={8}
          style={{ letterSpacing: 1, lineHeight: 20, marginVertical: 15 }}
        >
          {description}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ color: colors.color3, fontWeight: "100" }}>
            Quantity
          </Text>
          <View
            style={{
              width: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Avatar.Icon icon={""} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => {
  <View style={style.container} key={index}>
    <Image source={{ uri: item.url }} style={style.image} />
  </View>;
};

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
  },
});

export default ProductDetails;
