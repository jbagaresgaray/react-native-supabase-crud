import { yupResolver } from "@hookform/resolvers/yup";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styled } from "nativewind";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";

import AppButton from "../components/AppButton";
import AppDatePicker from "../components/AppDatePicker";
import AppSpinner from "../components/AppSpinner";
import AppTextInput from "../components/AppTextInput";
import useCreateAuthor from "../hooks/useCreateAuthor";
import useUpdateAuthor from "../hooks/useUpdateAuthor";
import useAuthorStore from "../stores/useAuthorStore";

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
  const navigation = useNavigation<any>();
  const [show, setShow] = useState(false);
  const [curDate, setCurDate] = useState<Date>(new Date());
  const params: any = useRoute<any>().params;
  const author = useAuthorStore((state) => state.author);
  const isSpinner = useAuthorStore((state) => state.isSpinner);
  const { getAuthor } = useAuthorStore();
  const createAuthorMutation = useCreateAuthor();
  const updateAuthorMutation = useUpdateAuthor();

  const { control, getValues, setValue, handleSubmit } = useForm<FormData>({
    defaultValues: {
      title: "",
      author: "",
      publishedDate: new Date(),
      genre: "",
    },
    resolver: yupResolver(schema),
  });

  const isLoading = useMemo(
    () => createAuthorMutation.isLoading || updateAuthorMutation.isLoading,
    [createAuthorMutation, updateAuthorMutation],
  );

  useEffect(() => {
    if (params?.action === "update") {
      console.log("ID: ", params?.authorId);
      getAuthor(params?.authorId);
    }
  }, [params]);

  useEffect(() => {
    if (author) {
      setValue("author", author.author);
      setValue("genre", author.genre);
      setValue("publishedDate", author.publishedDate);
      setValue("title", author.title);
    }
  }, [author]);

  useEffect(() => {
    if (createAuthorMutation.isSuccess || updateAuthorMutation.isSuccess) {
      navigation.goBack();
      return showMessage({
        message: "Saved!",
        description: "Record successfully saved",
      });
    }
  }, [createAuthorMutation.isSuccess, updateAuthorMutation.isSuccess]);

  const onSubmit = handleSubmit((data) => {
    console.log("data: ", data);

    if (params?.action === "update") {
      updateAuthorMutation.mutate({
        id: params?.authorId,
        author: {
          title: getValues("title"),
          author: getValues("author"),
          publishedDate: curDate,
          genre: getValues("genre"),
        },
      });
    } else {
      createAuthorMutation.mutate({
        title: getValues("title"),
        author: getValues("author"),
        publishedDate: curDate,
        genre: getValues("genre"),
      });
    }
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
      {isSpinner && <AppSpinner />}
      <StyledView className="flex-1 flex w-full spy">
        <AppTextInput
          label="Title"
          placeholder="Title"
          control={control}
          name="title"
          editable={!isLoading}
        />
        <AppTextInput
          label="Author"
          placeholder="Author"
          control={control}
          name="author"
          editable={!isLoading}
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
          editable={!isLoading}
        />
      </StyledView>
      <AppButton
        onPress={onSubmit}
        label={params?.action === "update" ? "Update" : "Save"}
        isLoading={isLoading}
      />
    </StyledSafeAreaView>
  );
};

export default MainScreen;
