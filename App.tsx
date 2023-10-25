import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClientProvider } from "react-query";

import RootNavigation from "./src/navigators";
import queryClient from "./src/services/query";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
