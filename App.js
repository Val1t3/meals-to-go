import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantsScreen from "./src/screens/restaurants.screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}

export default App;
