import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useEffect } from "react";

import useGetAllAuthors from "../hooks/useGetAllAuthors";
import EmptyScreen from "../screens/EmptyScreen";
import ListScreen from "../screens/ListScreen";
import MainScreen from "../screens/MainScreen";

const Tab = createMaterialTopTabNavigator();

const TopNavigation = () => {
  const getAllAuthorsMutation = useGetAllAuthors();

  useEffect(() => {
    getAllAuthorsMutation.mutate();
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="First" component={MainScreen} />
      <Tab.Screen name="Second" component={ListScreen} />
      <Tab.Screen name="Third" component={EmptyScreen} />
    </Tab.Navigator>
  );
};

export default TopNavigation;
