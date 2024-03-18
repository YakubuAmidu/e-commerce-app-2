import { View, Text } from "react-native";
import { defaultStyle } from "../styles/styles";

import Header from "../components/Header";

const Home = () => {
  return (
    <View style={defaultStyle}>
      {/*Header*/}
      <Header />
      <View style={{ fontSize: 25 }}>Our</View>
      <View style={{ fontSize: 25, fontWeight: "900" }}>Products</View>
      <Text>Homee</Text>
    </View>
  );
};

export default Home;
