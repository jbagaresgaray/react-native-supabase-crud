import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TabBarButton = (props) => {
  const { label, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={[
          styles.tabBar,
          focused ? styles.tabBarActive : styles.tabBarInActive,
        ]}
      >
        <View>
          <Text style={styles.text}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#fff",
  },
  tabBar: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarInActive: {
    // position: "absolute",
    // bottom: -10,
    // left: 0,
    // right: 0,
    // // width: "100%",
    // height: 70,

    borderColor: "#fff",
    backgroundColor: "#fff",
    borderBottomColor: "#fff",
    // borderBottomWidth: 20,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  tabBarActive: {
    borderColor: "#ffc245",
    backgroundColor: "#ffc245",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "#ffc245",
    backgroundColor: "#ffc245",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    borderRadius: 25,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },
});
