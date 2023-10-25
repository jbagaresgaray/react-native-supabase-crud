import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";

import TabBarButton from "../components/TabBarButton";
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
      safeAreaInsets={{
        bottom: 0,
      }}
      screenOptions={{
        tabBarIconStyle: { display: "none" },
        tabBarLabelPosition: "beside-icon",
        headerShown: false,
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
          backgroundColor: "#ffc245",
          paddingBottom: 20,
          // borderBottomColor: "#ffc245",
          // borderBottomWidth: 20,
        },
      }}
    >
      <BottomTab.Screen
        name="First"
        options={{
          tabBarButton: (props) => <TabBarButton {...props} label="First" />,
        }}
        component={MainScreen}
      />
      <BottomTab.Screen
        name="Second"
        options={{
          tabBarButton: (props) => <TabBarButton {...props} label="Second" />,
        }}
        component={ListScreen}
      />
      <BottomTab.Screen
        name="Third"
        options={{
          tabBarButton: (props) => <TabBarButton {...props} label="Third" />,
        }}
        component={EmptyScreen}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
