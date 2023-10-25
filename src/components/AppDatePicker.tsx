import RNDateTimePicker, {
  BaseProps,
} from "@react-native-community/datetimepicker";
import { styled } from "nativewind";
import React from "react";
import { View, Text, Pressable, Platform } from "react-native";

interface Props extends BaseProps {
  label: string;
  show: boolean;
  value: Date;
  onPress: () => void;
}

const StyledText = styled(Text);
const StyledPressable = styled(Pressable);
const StyledView = styled(View);

const AppDatePicker: React.FC<Props> = (props) => {
  const { label, show, value, onPress } = props;

  return (
    <StyledView className="mb-7">
      <StyledText className="font-semibold leading-7 text-gray-900 text-base">
        {label}
      </StyledText>

      <StyledPressable
        onPress={onPress}
        className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <StyledText>{value?.toString()}</StyledText>
      </StyledPressable>
      {show && (
        <RNDateTimePicker
          {...props}
          value={value}
          mode="date"
          display={Platform.select({
            ios: "spinner",
            default: "inline",
          })}
        />
      )}
    </StyledView>
  );
};

export default AppDatePicker;
