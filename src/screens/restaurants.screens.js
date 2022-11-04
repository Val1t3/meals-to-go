import React, { useEffect, useState } from "react";
import { Platform, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

const RestaurantsScreen = () => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (query) => {
    setSearch(query);
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  const SafeArea = styled.SafeAreaView`
    flex: 1;
    margin-top: ${isAndroid ? StatusBar.currentHeight + "px" : "0px"};
  `;

  const SearchContainer = styled.View`
    padding: 16px;
  `;

  const ListContainer = styled.View`
    flex: 1;
    padding: 16px;
  `;

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={search}
        />
      </SearchContainer>
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;
