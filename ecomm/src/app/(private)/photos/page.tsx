'use client'

import React from "react";

import PhotoList from "@/components/PhotoList";

const PhotosPage = () => {

  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    getphotos();
  }, []);

  const getphotos = async () => {
    try {
      await fetch('https://jsonplaceholder.typicode.com/photos')
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
          <PhotoList photos={photos.slice(0,6)} />
        </div>

        <hr></hr>

        <div className="flex justify-center p-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => { alert('Button Clicked!') }}>Click Me</button>
        </div>

        <hr></hr>
        {/* <p>
          {JSON.stringify(users)}
        </p> */}
      </div>
    </>
  )
};

export default PhotosPage;
