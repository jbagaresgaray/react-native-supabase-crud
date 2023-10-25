import RNDateTimePicker, {
  BaseProps,
} from "@react-native-community/datetimepicker";
import React from "react";
import { View, Text, Pressable, Modal } from "react-native";

interface Props extends BaseProps {
  label: string;
  show: boolean;
  value: Date;
  onPress: () => void;
  onClose: () => void;
}

const AppDatePicker: React.FC<Props> = (props) => {
  const { label, show, value, onPress, onClose } = props;

  return (
    <View className="mb-7">
      <Text className="font-semibold leading-7 text-gray-900 text-base">
        {label}
      </Text>

      <Pressable
        onPress={onPress}
        className="mt-2 px-3 bg-slate-100 block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <Text>{value?.toString()}</Text>
      </Pressable>
      {/* <Modal
        visible={show}
        animationType="slide"
        onRequestClose={onClose}
        // transparent
      >
        <View className="flex flex-1 justify-center items-center">
          <RNDateTimePicker
            {...props}
            value={value}
            mode="date"
            display="inline"
          />
        </View>
      </Modal> */}
      {show && (
        <RNDateTimePicker
          {...props}
          value={value}
          mode="date"
          display="inline"
        />
      )}
    </View>
  );
};

export default AppDatePicker;
