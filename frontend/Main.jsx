import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";

import Toast from "react-native-toast-message";

import Home from "./screens/Home";
import ProductDetails from "./components/ProductDetails";
import ConfirmOrder from "./screens/ConfirmOrder.jsx";
import Payment from "./screens/Payment.jsx";
import Login from "./screens/Login.jsx";
import Cart from "./screens/Cart.jsx";
import ForgetPassword from "./screens/ForgetPassword.jsx";
import Verify from "./screens/Verify.jsx";

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
          <Stack.Screen name="confirmorder" component={ConfirmOrder} />
          <Stack.Screen name="payment" component={Payment} />
          <Stack.Screen name="login" component={Login} />

          {/*Password resetting route*/}
          <Stack.Screen name="forgetpassword" component={ForgetPassword} />
          <Stack.Screen name="verify" component={Verify} />
        </Stack.Group>
      </Stack.Navigator>

      <Toast position="top" bottomOffset={20} />
    </NavigationContainer>
  );
};

export default Main;
