import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";

import useGetAllAuthors from "../hooks/useGetAllAuthors";
import EmptyScreen from "../screens/EmptyScreen";
import ListScreen from "../screens/ListScreen";
import MainScreen from "../screens/MainScreen";

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  const getAllAuthorsMutation = useGetAllAuthors();

  useEffect(() => {
    getAllAuthorsMutation.mutate();
  }, []);

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarIconStyle: { display: "none" },
        tabBarLabelPosition: "beside-icon",
        headerShown: false,
      }}
    >
      <BottomTab.Screen name="First" component={MainScreen} />
      <BottomTab.Screen name="Second" component={ListScreen} />
      <BottomTab.Screen name="Third" component={EmptyScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
