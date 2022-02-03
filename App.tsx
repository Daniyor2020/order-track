import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import {
  DefaultTheme,
  DarkTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import store from "./src/redux/store";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const theme = {
    ...DarkTheme,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      primary: "#595957",
      accent: "yellow",
    },
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PaperProvider theme={theme}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
          </PaperProvider>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
