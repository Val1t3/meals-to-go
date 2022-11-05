import styled from "styled-components";
import { Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === "android";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight + "px" : "0px"};
`;

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantList = styled.FlatList`
  contentcontainerstyle: {
    padding: 16px;
  }
`;
