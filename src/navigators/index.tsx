import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";

import BottomTabs from "./BottomTabs";
import useGetAllAuthors from "../hooks/useGetAllAuthors";
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
      <MainStack.Screen name="Tabs" component={BottomTabs} />
      <MainStack.Screen
        name="Form"
        options={{ headerShown: true, title: "Edit Author" }}
        component={MainScreen}
      />
    </MainStack.Navigator>
  );
};

export default RootNavigation;
