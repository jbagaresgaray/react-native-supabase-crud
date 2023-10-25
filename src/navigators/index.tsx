import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";

import MainScreen from "../screens/MainScreen";
import ListScreen from "../screens/ListScreen";
import useAuthorStore from "../stores/useAuthorStore";
import useGetAllAuthors from "../hooks/useGetAllAuthors";

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
      {/* <MainStack.Screen name="Home" component={MainScreen} /> */}
      <MainStack.Screen name="ListScreen" component={ListScreen} />
    </MainStack.Navigator>
  );
};

export default RootNavigation;
