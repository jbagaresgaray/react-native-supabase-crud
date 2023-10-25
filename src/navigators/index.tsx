import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";

import useGetAllAuthors from "../hooks/useGetAllAuthors";
import ListScreen from "../screens/ListScreen";
import MainScreen from "../screens/MainScreen";

const MainStack = createNativeStackNavigator();

const RootNavigation = () => {
  const getAllAuthorsMutation = useGetAllAuthors();

  useEffect(() => {
    getAllAuthorsMutation.mutate();
  }, []);

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Home" component={MainScreen} />
      <MainStack.Screen name="ListScreen" component={ListScreen} />
    </MainStack.Navigator>
  );
};

export default RootNavigation;
