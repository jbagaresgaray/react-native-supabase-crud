import { yupResolver } from "@hookform/resolvers/yup";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { styled } from "nativewind";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";

import AppButton from "../components/AppButton";
import AppDatePicker from "../components/AppDatePicker";
import AppTextInput from "../components/AppTextInput";
import useCreateAuthor from "../hooks/useCreateAuthor";
import { showMessage } from "react-native-flash-message";

type FormData = {
  title?: string;
  author?: string;
  publishedDate?: Date;
  genre?: string;
};

const schema = yup.object({
  title: yup.string().required(),
  author: yup.string().required(),
  publishedDate: yup.date().required(),
  genre: yup.string().required(),
});

const StyledView = styled(View);
const StyledSafeAreaView = styled(SafeAreaView);

const MainScreen = () => {
  const [show, setShow] = useState(false);
  const [curDate, setCurDate] = useState<Date>(new Date());

  const { control, getValues, handleSubmit } = useForm<FormData>({
    defaultValues: {
      title: "",
      author: "",
      publishedDate: new Date(),
      genre: "",
    },
    resolver: yupResolver(schema),
  });

  const createAuthorMutation = useCreateAuthor({
    title: getValues("title"),
    author: getValues("author"),
    publishedDate: curDate,
    genre: getValues("genre"),
  });

  useEffect(() => {
    if (createAuthorMutation.isSuccess) {
      return showMessage({
        message: "Saved!",
        description: "Record successfully saved",
      });
    }
  }, [createAuthorMutation.isSuccess]);

  const onSubmit = handleSubmit((data) => {
    createAuthorMutation.mutate();

    console.log("data: ", data);
    console.log("isLoading: ", createAuthorMutation.isLoading);
    console.log("isSuccess: ", createAuthorMutation.isSuccess);
    console.log("isError: ", createAuthorMutation.isError);
  });

  const showDatepicker = () => {
    console.log("show");
    setShow(true);
  };

  const onChange = (event: DateTimePickerEvent, value: Date) => {
    if (event?.type === "set") {
      setCurDate(value);
    }
    setShow(false);
  };

  return (
    <StyledSafeAreaView className="flex-1 flex relative items-center p-3 bg-white">
      <StyledView className="flex-1 flex w-full spy">
        <AppTextInput
          label="Title"
          placeholder="Title"
          control={control}
          name="title"
          editable={!createAuthorMutation.isLoading}
        />
        <AppTextInput
          label="Author"
          placeholder="Author"
          control={control}
          name="author"
          editable={!createAuthorMutation.isLoading}
        />
        <AppDatePicker
          label="Published Date"
          onPress={showDatepicker}
          show={show}
          value={curDate}
          onChange={onChange}
        />
        <AppTextInput
          label="Genre"
          placeholder="Genre"
          control={control}
          name="genre"
          editable={!createAuthorMutation.isLoading}
        />
      </StyledView>
      <AppButton
        onPress={onSubmit}
        label="Save"
        isLoading={createAuthorMutation.isLoading}
      />
    </StyledSafeAreaView>
  );
};

export default MainScreen;
