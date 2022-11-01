import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantsScreen from "./src/screens/restaurants.screens";

function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

export default App;
