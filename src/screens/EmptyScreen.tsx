import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const StyledSafeAreaView = styled(SafeAreaView);

const EmptyScreen = () => {
  return (
    <StyledSafeAreaView className="bg-white flex flex-1 items-center justify-center">
      <Text>EmptyScreen</Text>
    </StyledSafeAreaView>
  );
};

export default EmptyScreen;
