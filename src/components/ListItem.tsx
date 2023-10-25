import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { styled } from "nativewind";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { IAuthor } from "../interface";

interface Props {
  item: IAuthor;
  index: number;
  onPressDel: () => void;
  onPressEdit: () => void;
}

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const ListItem: React.FC<Props> = ({
  item,
  index,
  onPressDel,
  onPressEdit,
}) => {
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
      <StyledView className="flex flex-row items-center space-x-5">
        <StyledView className="shrink-0 sm:flex sm:flex-col sm:items-end">
          <StyledText className="text-sm leading-6 text-gray-900">
            {item.genre}
          </StyledText>
          <StyledText className="mt-1 text-xs leading-5 text-gray-500">
            {item.publishedDate.toString()}
          </StyledText>
        </StyledView>
        <StyledView className="flex flex-row items-center space-x-3">
          <TouchableOpacity onPress={onPressEdit}>
            <MaterialCommunityIcons
              name="pencil-outline"
              size={24}
              color="gray"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressDel}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={24}
              color="red"
            />
          </TouchableOpacity>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default ListItem;
