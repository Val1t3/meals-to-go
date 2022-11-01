import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card";

const isAndroid = Platform.OS === "android";

const RestaurantsScreen = () => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (query) => {
    setSearch(query);
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contSearch}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={search}
        />
      </View>
      <View style={styles.contContent}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  contSearch: {
    padding: 16,
  },
  contContent: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});

export default RestaurantsScreen;
