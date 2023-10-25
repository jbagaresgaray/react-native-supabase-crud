import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import MainScreen from "../screens/MainScreen";

const MainStack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Home" component={MainScreen} />
    </MainStack.Navigator>
  );
};

export default RootNavigation;
