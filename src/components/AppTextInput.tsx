import React from "react";
import { Control, Controller } from "react-hook-form";
import { View, Text, TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {
  label: string;
  control: Control<any>;
  name: string;
}

const AppTextInput: React.FC<Props> = (props) => {
  const { label, control, name } = props;
  return (
    <View className="mb-7">
      <Text className="font-semibold leading-7 text-gray-900 text-base">
        {label}
      </Text>
      <View className="mt-2">
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              {...props}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="px-3 bg-slate-100 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          )}
          name={name}
        />
      </View>
    </View>
  );
};

export default AppTextInput;
