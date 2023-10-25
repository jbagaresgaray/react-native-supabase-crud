import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TabBar = ({ state, descriptors, navigation, insets }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              isFocused ? styles.tabBarFocusStyle : styles.tabBarDefaultStyle,
              styles.tabBarStyle,
            ]}
          >
            <Text style={styles.tabTextStyle}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBarStyle: {
    flex: 1,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    // borderBottomWidth: 20,
  },
  tabBarDefaultStyle: {
    backgroundColor: "#fff",
    borderBottomColor: "yellow",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  tabBarFocusStyle: {
    backgroundColor: "yellow",
    borderBottomColor: "fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  tabTextStyle: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
