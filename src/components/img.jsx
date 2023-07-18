/*import React from 'react';
import './../styles/img.css';
import image2105 from './../image/2105.svg';
import image2106 from './../image/2106.svg';
import image2107 from './../image/2107.svg';
import image2108 from './../image/2108.svg';
import image2109 from './../image/2109.svg';
import image2110 from './../image/2110.svg';
import image2111 from './../image/2111.svg';
import image2112 from './../image/2112.svg';
import image2113 from './../image/2113.svg';
import image2114 from './../image/2114.svg';
import image2115 from './../image/2115.svg';
import image2116 from './../image/2116.svg';

const images = [
  image2105,
  image2106,
  image2107,
  image2108,
  image2109,
  image2110,
  image2111,
  image2112,
  image2113,
  image2114,
  image2115,
  image2116,
];

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image} alt={`Image ${index + 1}`} className="image" />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
*/
import React, { useState, useEffect } from 'react';
import './../styles/img.css';
import axios from 'axios';

const ImageGallery = () => {
  const [imageData, setImageData] = useState([]);
  const [authorsData, setAuthorsData] = useState([]);
  const [locationsData, setLocationsData] = useState([]);
  const [selectedImageInfo, setSelectedImageInfo] = useState(null);

  useEffect(() => {

    const fetchImageData = async () => {
      try {
        const response = await axios.get('https://test-front.framework.team/paintings');
        setImageData(response.data.slice(0, 12));
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };


    const fetchAuthorsData = async () => {
      try {
        const response = await axios.get('https://test-front.framework.team/authors');
        setAuthorsData(response.data);
      } catch (error) {
        console.error('Error fetching authors data:', error);
      }
    };


    const fetchLocationsData = async () => {
      try {
        const response = await axios.get('https://test-front.framework.team/locations');
        setLocationsData(response.data);
      } catch (error) {
        console.error('Error fetching locations data:', error);
      }
    };


    const fetchData = async () => {
      try {
        await Promise.all([fetchImageData(), fetchAuthorsData(), fetchLocationsData()]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const handleImageMouseEnter = (index) => {
    setSelectedImageInfo(imageData[index]);
  };

  const handleImageMouseLeave = () => {
    setSelectedImageInfo(null);
  };


  const getAuthorName = (authorId) => {
    const author = authorsData.find((author) => author.id === authorId);
    return author ? author.name : '';
  };

  const getLocationName = (locationId) => {
    const location = locationsData.find((location) => location.id === locationId);
    return location ? location.location : '';
  };

  return (
    <div className="image-gallery">
      {imageData.map((image, index) => (
        <div
          key={image.id}
          className="image-item"
          onMouseEnter={() => handleImageMouseEnter(index)}
          onMouseLeave={handleImageMouseLeave}
        >
          <img
            src={`https://test-front.framework.team${image.imageUrl}`}
            alt={`Img ${index + 1}`}
            className="image"
          />
          {selectedImageInfo && selectedImageInfo.id === image.id && (
            <div className="image-info">
              <h3>{selectedImageInfo.name}</h3>
              <p>Author: {getAuthorName(selectedImageInfo.authorId)}</p>
              <p>Created: {selectedImageInfo.created}</p>
              <p>Located: {getLocationName(selectedImageInfo.locationId)}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;


