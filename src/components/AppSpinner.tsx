import { styled } from "nativewind";
import React from "react";
import { View, ActivityIndicator } from "react-native";

const StyledView = styled(View);
const StyledLoading = styled(ActivityIndicator);

const AppSpinner = () => {
  return (
    <StyledView className="flex flex-1 justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-10">
      <StyledLoading size="large" />
    </StyledView>
  );
};

export default AppSpinner;
