import React from "react";
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from "react-native";
import useAuthorStore from "../stores/useAuthorStore";
import useGetAllAuthors from "../hooks/useGetAllAuthors";
import { IAuthor } from "../interface";

const ListScreen = () => {
  const authors = useAuthorStore((state) => state.authors);
  const isLoading = useAuthorStore((state) => state.isLoading);
  console.log("authors: ", authors);
  const [refreshing, setRefreshing] = React.useState(false);
  const getAllAuthorsMutation = useGetAllAuthors();

  console.log("isLoading: ", isLoading);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getAllAuthorsMutation.mutate();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const renderItem = ({ item, index }: { item: IAuthor; index: number }) => {
    return (
      <View className="flex-row justify-between py-5 mx-5">
        <View className="flex-row min-w-0 gap-x-4">
          <Image
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            }}
          />
          <View className="min-w-0 flex-auto">
            <Text className="text-sm font-semibold leading-6 text-gray-900">
              {item.author}
            </Text>
            <Text className="mt-1 truncate text-xs leading-5 text-gray-500">
              {item.title}
            </Text>
          </View>
        </View>
        <View className="shrink-0 sm:flex sm:flex-col sm:items-end">
          <Text className="text-sm leading-6 text-gray-900">{item.genre}</Text>
          <Text className="mt-1 text-xs leading-5 text-gray-500">
            {item.publishedDate.toString()}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 flex bg-white">
      {isLoading && !refreshing ? (
        <View className="flex flex-1 justify-center items-center">
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={authors}
          renderItem={(item) => renderItem(item)}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </SafeAreaView>
  );
};

export default ListScreen;
