import RNDateTimePicker, {
  BaseProps,
} from "@react-native-community/datetimepicker";
import { styled } from "nativewind";
import React from "react";
import { View, Text, Pressable } from "react-native";

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
        className="mt-2 px-3 bg-slate-100 block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <StyledText>{value?.toString()}</StyledText>
      </StyledPressable>
      {show && (
        <RNDateTimePicker
          {...props}
          value={value}
          mode="date"
          display="inline"
        />
      )}
    </StyledView>
  );
};

export default AppDatePicker;
