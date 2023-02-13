import React, { useState, useEffect } from "react";
import styled from "styled-components";
import location from "../../Assets/Images/place.svg";
import axios from "axios";
import { placeApi } from "../Api";
import { useParams } from "react-router";
import "../../App.css";
import { Helmet } from "react-helmet";

export default function Place() {
  const [singlePlaces, setSinglePlaces] = useState({ name: "", gallery: [] });

  const { id } = useParams();
  useEffect(() => {
    placeApi
      .get(`${id}`)
      .then((response) => {
        setSinglePlaces(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Places | {singlePlaces.name}</title>
      </Helmet>
      <PlaceContainer>
        <Heading>{singlePlaces.name}</Heading>
        <LocationSection>
          <IconFirst>{singlePlaces.category_name}</IconFirst>
          <IconImageContainer>
            <IconImage src={location} alt="Location-Icon" />
          </IconImageContainer>

          <Span>{singlePlaces.location}</Span>
        </LocationSection>
        <ImageContainer>
          <LeftContainer>
            <SingleImg src={singlePlaces.image} alt="Featured Image" />
          </LeftContainer>
          <RightContainer>
            {singlePlaces.gallery.map((image) => (
              <Imcontainer>
                <Img src={image.image} />
              </Imcontainer>
            ))}
          </RightContainer>
        </ImageContainer>
        <SubHeading>Place Details</SubHeading>
        <Paragraph>{singlePlaces.description}</Paragraph>
      </PlaceContainer>
    </>
  );
}

const PlaceContainer = styled.section`
  width: 75%;
  margin: 0 auto;
  padding-top: 50px;
  overflow: hidden;
`;
const Heading = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;
`;
const LocationSection = styled.div`
  display: flex;
  align-items: center;
`;
const IconFirst = styled.span`
  display: inline-block;
  margin-right: 10px;
  border-radius: 25px;
  padding: 2px 8px;
  border: 1px solid gray;
  font-size: 15px;
  color: gray;
`;
const IconImageContainer = styled.div`
  width: 12px;
  margin-right: 10px;
  display: flex;
`;
const IconImage = styled.img`
  display: block;
  width: 100%;
`;
const Span = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: gray;
`;
const ImageContainer = styled.div`
  display: flex;
  margin: 30px 0;
  width: 100%;
  border-top-left-radius: 5px;
  overflow: hidden;
`;
const LeftContainer = styled.div`
  width: 50%;
  margin-right: 20px;
`;
const SingleImg = styled.img`
  display: block;
  width: 100%;
`;
const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;
const Imcontainer = styled.div`
  width: 45%;
  height: 55%;
  margin-right: 15px;
  &:nth-child(2) {
    border-top-right-radius: 5px;
    overflow: hidden;
  }
  &:nth-child(4) {
    border-bottom-right-radius: 5px;
    overflow: hidden;
  }
`;
const Img = styled.img`
  display: block;
  width: 100%;
`;
const SubHeading = styled.h2`
  margin-bottom: 10px;
`;
const Paragraph = styled.p``;
