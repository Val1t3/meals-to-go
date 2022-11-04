/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Card } from "react-native-paper";
import { Text, Image, View } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../assets/icons/star";
import isOpen from "../../assets/icons/isOpen";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Adress = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
`;

const SectionEnd = styled.View`
  flex-direction: row;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const RatingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Row>
            <Rating>
              {RatingArray.map(() => {
                return <SvgXml xml={star} width={20} height={20} />;
              })}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="label" style={{ color: "red" }}>
                  CLOSED TEMPORARILY
                </Text>
              )}
              <View style={{ marginLeft: 16 }} />
              {isOpenNow && <SvgXml xml={isOpen} width={20} height={20} />}
              <View style={{ marginLeft: 16 }} />
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </SectionEnd>
          </Row>
          <Adress>{address}</Adress>
        </Info>
      </RestaurantCard>
    </>
  );
};

export default RestaurantInfoCard;
