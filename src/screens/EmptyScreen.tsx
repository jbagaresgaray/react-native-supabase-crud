import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const EmptyScreen = () => {
  return (
    <SafeAreaView className="bg-white flex flex-1 items-center justify-center">
      <Text>EmptyScreen</Text>
    </SafeAreaView>
  );
};

export default EmptyScreen;
