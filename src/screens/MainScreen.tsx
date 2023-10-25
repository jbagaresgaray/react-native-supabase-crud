import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import * as yup from "yup";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppDatePicker from "../components/AppDatePicker";

type FormData = {
  title: string;
  author: string;
  publishedDate: Date;
  genre: string;
};

const schema = yup.object({
  title: yup.string().required(),
  author: yup.string().required(),
  publishedDate: yup.date().required(),
  genre: yup.string().required(),
});

const MainScreen = () => {
  const [show, setShow] = useState(false);

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      author: "",
      publishedDate: new Date(),
      genre: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  const showDatepicker = () => {
    console.log("show");
    setShow(true);
  };

  const onChange = (value) => {
    console.log("value: ", value);
    setShow(false);
  };

  return (
    <View className="flex-1 flex relative items-center p-3 bg-white">
      <View className="flex-1 flex w-full spy">
        <AppTextInput
          label="Title"
          placeholder="Title"
          control={control}
          name="title"
        />
        <AppTextInput
          label="Author"
          placeholder="Author"
          control={control}
          name="author"
        />
        <AppDatePicker
          label="Published Date"
          onPress={showDatepicker}
          show={show}
          value={new Date()}
          onClose={() => {
            setShow(false);
          }}
          onChange={onChange}
        />
        <AppTextInput
          label="Genre"
          placeholder="Genre"
          control={control}
          name="genre"
        />
      </View>
      <AppButton label="Save" />
    </View>
  );
};

export default MainScreen;
