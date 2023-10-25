import { styled } from "nativewind";
import React from "react";
import { Control, Controller } from "react-hook-form";
import { View, Text, TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {
  label: string;
  control: Control<any>;
  name: string;
}

const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledView = styled(View);

const AppTextInput: React.FC<Props> = (props) => {
  const { label, control, name } = props;
  return (
    <StyledView className="mb-7">
      <StyledText className="font-semibold leading-7 text-gray-900 text-base">
        {label}
      </StyledText>
      <StyledView className="mt-2">
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledTextInput
              {...props}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          )}
          name={name}
        />
      </StyledView>
    </StyledView>
  );
};

export default AppTextInput;
