import React, { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../../features/restaurant-info-card";
import { Spacer } from "../../components/spacer/spacer";
import {
  RestaurantList,
  SafeArea,
  SearchContainer,
} from "./restaurants.styles";

const RestaurantsScreen = () => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (str) => {
    setSearch(str);
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={search}
        />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
