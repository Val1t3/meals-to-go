import React from "react";
// import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

const isAndroid = Platform.OS === "android";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contSearch}>
        <Text>search</Text>
      </View>
      <View style={styles.contContent}>
        <Text>list</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  contSearch: {
    padding: 16,
    backgroundColor: "green",
  },
  contContent: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});

export default App;
