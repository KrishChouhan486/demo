import React, { useState, useEffect } from 'react';
import Image from '../src/image'; // Ensure the correct import path for Image.js

const App = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const imageDescription = 'A dynamically fetched image';

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          'https://api.unsplash.com/photos/random?client_id=7Mcw9UoEGKQqHr8B17oGlp5uoCcmzLIYDpvcTrBawCw'
        );
        const data = await response.json();
        setImageUrl(data.urls.small); // Correct key to access the image URL
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      <h1>My Image Fetching App</h1>
      {imageUrl ? (
        <Image url={imageUrl} description={imageDescription} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
