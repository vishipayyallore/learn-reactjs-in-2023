'use client'

import React from "react";

import PhotoList from "@/components/PhotoList";
import './CountryCard.css';

const PhotosPage = () => {

  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    getphotos();
  }, []);

  const getphotos = async () => {
    try {
      await fetch('https://localhost:7289/api/countries')
        .then(response => response.json())
        .then(data => setPhotos(data))
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center text-cyan-900">Photo Gallery</h1>
        <hr></hr>

        <div>
          <PhotoList photos={photos.slice(0, 6)} />
        </div>

      </div>
    </>
  )
};

export default PhotosPage;
