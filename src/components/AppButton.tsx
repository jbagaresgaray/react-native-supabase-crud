import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  label: string;
}

const AppButton: React.FC<Props> = (props) => {
  const { label } = props;

  return (
    <TouchableOpacity className="absolute bottom-0 w-full mb-5 items-center bg-blue-600 py-3 rounded-lg">
      <Text className="font-semibold leading-7 text-white text-base tracking-wide">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
