import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface Props extends TouchableOpacityProps {
  label: string;
  isLoading?: boolean;
}

const AppButton: React.FC<Props> = (props) => {
  const { label, isLoading } = props;

  return (
    <TouchableOpacity
      {...props}
      className="absolute bottom-0 w-full mb-5 items-center bg-blue-600 py-3 rounded-lg"
    >
      {isLoading ? (
        <ActivityIndicator color="#FFF" size="large" />
      ) : (
        <Text className="font-semibold leading-7 text-white text-base tracking-wide">
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
