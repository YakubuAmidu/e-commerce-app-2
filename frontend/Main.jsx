import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";

import Toast from "react-native-toast-message";

import Home from "./screens/Home";
import ProductDetails from "./components/ProductDetails";
import Cart from "./screens/Cart.jsx";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Group>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="productDetails" component={ProductDetails} />
          <Stack.Screen name="cart" component={Cart} />
        </Stack.Group>
      </Stack.Navigator>

      <Toast position="top" bottomOffset={20} />
    </NavigationContainer>
  );
};

export default Main;
