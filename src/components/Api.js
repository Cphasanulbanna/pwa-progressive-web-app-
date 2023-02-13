import React from 'react';
import axios from "axios";

export const placesApi = axios.create({
    baseURL: "https://traveller.talrop.works/api/v1/places/",
});

export const placeApi = axios.create({
    baseURL: "https://traveller.talrop.works/api/v1/places/view/",
    
});


 function Api() {
  return (
    <>
        
    </>
  )
}
export default Api;