import React, { useState } from 'react';
import './Gallery.css';

interface ImageData {
  src: string;
//   alt: string;
//   title: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const images: ImageData[] = [
    {
      src: '/AgroAI/T1.jpg',
    //   alt: 'Agricultural Technology 1',
    //   title: 'Smart Farming Solutions'
    },
    {
      src: '/AgroAI/T2.jpg',
    //   alt: 'Agricultural Technology 2',
    //   title: 'Precision Agriculture'
    },
    {
      src: '/AgroAI/image1.jpg',
    //   alt: 'Agricultural Technology 3',
    //   title: 'Crop Monitoring Systems'
    },
    {
      src: '/AgroAI/image2.jpg',
    //   alt: 'Agricultural Technology 4',
    //   title: 'Sustainable Farming'
    },
    {
      src: '/AgroAI/image3.jpg',
    //   alt: 'AgroAI Team',
    //   title: 'Our Expertise'
    },
    {
      src: '/AgroAI/image4.jpg',
    //   alt: 'Innovation in Agriculture',
    //   title: 'Future of Farming'
    }
  ];

  const openModal = (image: ImageData) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h1>Photo Gallery</h1>
          <p>Explore our agricultural innovations and smart farming solutions</p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <img src={image.src}  />
              {/* alt={image.alt} */}
              <div className="gallery-overlay">
                {/* <h3>{image.title}</h3> */}
                <p>Click to view</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
              <img src={selectedImage.src}  /> 
              {/* alt={selectedImage.alt} */}
              <div className="modal-info">
                {/* <h2>{selectedImage.title}</h2>
                <p>{selectedImage.alt}</p> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
