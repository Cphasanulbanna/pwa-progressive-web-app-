import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import location from "../../Assets/Images/place.svg";
import { placesApi } from "../Api";
import {Link} from "react-router-dom";


export default function Places() {
   const [places, setPlaces] = useState([]);
    useEffect(() => {
        placesApi
        .get("")
        .then((response) => {
          setPlaces( response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [])
    


  const renderPlaces = () => {
    return places.map((place) => (
      <ListItem key={place.id}>
        <ImageContainer to={`/place/${place.id}`}>
            <PlaceImg alt="Place-Image" src={place.image} />
        </ImageContainer>
        <TextBox>
          <Title>{place.name}</Title>
          <DetailsSection>
            <IconImage>
              <Icon src={location} alt="Place-Icon" />
            </IconImage>
            <LocationText>{place.location}</LocationText>
          </DetailsSection>
        </TextBox>
      </ListItem>
    ));
  };

  return (
    <>
      <GallerySection>
        <TopSection>
          <SubHeading>Welcome</SubHeading>
          <Para>explore the world around you</Para>
        </TopSection>
        <BottomSection>
          <List>{renderPlaces()}</List>
        </BottomSection>
      </GallerySection>
    </>
  );
}

const GallerySection = styled.section`
  padding-top: 35px;
  width: 90%;
  margin: 0 auto;
`;
const TopSection = styled.div`
  margin-bottom: 30px;
`;
const SubHeading = styled.h2`
  color: #000;
  margin-bottom: 10px;
`;
const Para = styled.p`
  color: gray;
`;
const BottomSection = styled.section`
  margin: 0 auto;
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ListItem = styled.li`
  width: 24%;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 15px;
`;
const ImageContainer = styled(Link)`
    cursor: pointer;
`;
const PlaceImg = styled.img`
  width: 100%;
  display: block;
`;
const TextBox = styled.div``;
const Title = styled.h4``;
const DetailsSection = styled.div`
  display: flex;
  margin-top: 10px;
`;
const LocationText = styled.span`
  margin-left: 10px;
`;
const IconImage = styled.div``;
const Icon = styled.img``;
