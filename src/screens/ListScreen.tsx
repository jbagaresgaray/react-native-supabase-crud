import { styled } from "nativewind";
import React from "react";
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useGetAllAuthors from "../hooks/useGetAllAuthors";
import { IAuthor } from "../interface";
import useAuthorStore from "../stores/useAuthorStore";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledSafeAreaView = styled(SafeAreaView);

const ListScreen = () => {
  const authors = useAuthorStore((state) => state.authors);
  const isLoading = useAuthorStore((state) => state.isLoading);

  const [refreshing, setRefreshing] = React.useState(false);

  const getAllAuthorsMutation = useGetAllAuthors();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getAllAuthorsMutation.mutate();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const renderItem = ({ item, index }: { item: IAuthor; index: number }) => {
    return (
      <StyledView className="flex-row justify-between py-5 mx-5">
        <StyledView className="flex-row min-w-0 gap-x-4">
          <StyledImage
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            }}
          />
          <StyledView className="min-w-0 flex-auto">
            <StyledText className="text-sm font-semibold leading-6 text-gray-900">
              {item.author}
            </StyledText>
            <StyledText className="mt-1 truncate text-xs leading-5 text-gray-500">
              {item.title}
            </StyledText>
          </StyledView>
        </StyledView>
        <StyledView className="shrink-0 sm:flex sm:flex-col sm:items-end">
          <StyledText className="text-sm leading-6 text-gray-900">
            {item.genre}
          </StyledText>
          <StyledText className="mt-1 text-xs leading-5 text-gray-500">
            {item.publishedDate.toString()}
          </StyledText>
        </StyledView>
      </StyledView>
    );
  };

  return (
    <StyledSafeAreaView className="flex-1 flex bg-white">
      {isLoading && !refreshing ? (
        <StyledView className="flex flex-1 justify-center items-center">
          <ActivityIndicator size="large" />
        </StyledView>
      ) : (
        <FlatList
          data={authors}
          renderItem={(item) => renderItem(item)}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </StyledSafeAreaView>
  );
};

export default ListScreen;
