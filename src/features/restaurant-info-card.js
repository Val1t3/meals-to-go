/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Image } from "react-native";
import star from "../../assets/icons/star";
import isOpen from "../../assets/icons/isOpen";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../components/spacer/spacer";
import { Text } from "../components/typography/text";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Title,
  Row,
  Rating,
  SectionEnd,
  Address,
} from "./restaurant-info-card.styles";

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
              {RatingArray.map((index) => {
                return <SvgXml key={index} xml={star} width={20} height={20} />;
              })}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="label" style={{ color: "red" }}>
                  CLOSED TEMPORARILY
                </Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={isOpen} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Image
                  style={{ width: 15, height: 15 }}
                  source={{ uri: icon }}
                />
              </Spacer>
            </SectionEnd>
          </Row>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};

export default RestaurantInfoCard;
