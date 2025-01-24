import React from 'react';
import { Card } from '@mui/material';

interface ICarouselImage {
  url: string;
}

const CarouselImage: React.FC<ICarouselImage> = (props) => {
  const { url } = props;
  return (
    <Card
      sx={{
        maxWidth: '100%',
        height: '500px',
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '24px',
        color: 'white',
        marginLeft: '32px',
        backgroundColor: '#fff',
        transition: 'transform 0.5s ease-in-out',  // плавный переход
      }}
    />
  );
};

export default CarouselImage;