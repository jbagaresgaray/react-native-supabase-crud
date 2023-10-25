import { useNavigation } from "@react-navigation/native";
import { styled } from "nativewind";
import React from "react";
import {
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Alert,
} from "react-native";
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";

import AppSpinner from "../components/AppSpinner";
import ListItem from "../components/ListItem";
import useDeleteAuthor from "../hooks/useDeleteAuthor";
import useGetAllAuthors from "../hooks/useGetAllAuthors";
import { IAuthor } from "../interface";
import useAuthorStore from "../stores/useAuthorStore";

const StyledView = styled(View);
const StyledSafeAreaView = styled(SafeAreaView);

const ListScreen = () => {
  const navigation = useNavigation<any>();
  const authors = useAuthorStore((state) => state.authors);
  const isLoading = useAuthorStore((state) => state.isLoading);

  const [refreshing, setRefreshing] = React.useState(false);

  const getAllAuthorsMutation = useGetAllAuthors();
  const deleteAuthorMutation = useDeleteAuthor();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getAllAuthorsMutation.mutate();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const onDelete = (id: number) => {
    const onDeleteItem = () => {
      deleteAuthorMutation.mutate(id);

      if (deleteAuthorMutation.isSuccess) {
        return showMessage({
          message: "Deleted",
          description: "Record successfully deleted",
        });
      }
    };
    Alert.alert("Delete Item ?", "Are you sure you want to delete this item?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: onDeleteItem },
    ]);
  };

  const onEdit = (id: number) => {
    navigation.navigate("Form", {
      authorId: id,
      action: "update",
    });
  };

  const renderItem = ({ item, index }: { item: IAuthor; index: number }) => {
    return (
      <ListItem
        item={item}
        index={index}
        key={index}
        onPressDel={() => onDelete(item.id)}
        onPressEdit={() => onEdit(item.id)}
      />
    );
  };

  return (
    <StyledSafeAreaView className="flex-1 flex bg-white">
      {deleteAuthorMutation.isLoading && <AppSpinner />}
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
