import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CarouselImage from './CarouselImage';
import { Box } from '@mui/material';

const sliderURLs = [
{
  url: 'https://s3-alpha-sig.figma.com/img/89a9/3407/7f26eceaa54104aee2e696f762c26fb3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FL37xRoUhPZmpxOgZ2q2xp3nPa9xsVR5~eATXQhFQLX0x9xBaruxOeKHw9RHVXsoc4GltVplQl3T~jIlW8VDyK2LNGGycVZA2Jmxesqbyp1LHJ88Fn9~7sPI5FU6ZbMJoHq~Bolfcc0ZT6HTxCdaa8kNI39zUq8YFqr4wSHQYDM4Q5dYmRNxTTxYuG4kWL6MD3ZaDtmRoLx8oOm1S8~x1VW5Q6D9t~QNwWMVrI-LI2NqJvpxF0GdPOH0Gl6yH~wkkcmTy3vQMR9VVRcr-XhPIh1H2AVk5bGLP3XQCrVasJnNR7oXewEHQzHstHGYzMTrCs~wbnQOZvqEeCKv82j1sg__', 
},
{
  url: 'https://s3-alpha-sig.figma.com/img/3c37/4a14/9329c9a832db745193dc413093e3283c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RrqlVXvdGu42GIwTJEIAx4x8UTJQB8QQ9xIhbnqoAk-PU8f2l22jGpSoSW5W-0zUKQ-I6XeenI3aSduQw-4Gs87Huoqc~bBRWluazK4BaAKQL9p5mu~FVbUN0JvbX6iSWJg4e4OLAkexf3GaFFp85haRPJg7K4bEAOCVUvyDdNuL~N8ShRXgSoz9R3ku5RfMpECBBqmqq0PZV7dp-9fWFsg5sAdOZn88HBlfWQWHSVEw~bo3M1yM6WnlEZXzaaNgtni6lMBf~4iyqFXeXQ7LTa1oWecVqrkBoVEElzKoCE1AT0SoG-bV9alfJX7xhcsroXzrwxavj5OfMSpZY9Fl-w__'
},
{
  url: 'https://s3-alpha-sig.figma.com/img/097c/620c/3ce9aad323d2186f0935eebd1dd0decd?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M1ppqrz7NorfBO4WuyAf~NWgXVYZrwTf9g7k8cZbwBhS~oT8hTwJkSR6zZkmrNDe2qCaVMP6VIWmlSBcb0QUdW2gdfbQ781r99Io5e-RCBND7FmoGgzh4fAtoPbwRHcbtpWkAb2EvLEac8IDkCVXOMlpYGBKgp7IEO86-vTpVcWuopEIwusA2YVAGv4i9nmGKaVtvB4f0LVN0SGHprBrbg-eDiJZ8BmeeG4Mt2h8hbHNvF15kWqj0bA7xe-vsabJ8kWoi6PNhzpAKI0c7gCVMPzpbydm6qgYeJ58PB~aEVBLAWwEVOYEtd2xCotxhD0d7FZm4SPxemD0RmWa3~31ew__'
},
{
  url: 'https://s3-alpha-sig.figma.com/img/7ca3/6cc4/483f97479382221ffd8057ff55d41502?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pRpiN6GmohY0IHUeH3xKtjFRfkcOLnbm52OIJcsdYzeLJD1g2OpqtN50I8nA~8bvTveYgvT-G0zjum0UcfgNMXKjovBoj9PGxnyLp5CdCOPcq6MBFy0ZmoWTaayM9gzfFyAXGKYEcJ4~0kZGxzX~KgUImQe-ZjzEYI3FACrCIDIGfPF0TpJC2h8Sb1FizUokH2~k6zPdMcSoQdUX~T3MLGH6uAID~8w6dM2IJp43yv3u56VU7EL5M1PjnhvmkNO0upB0IOhfEk-221O7TS8rYaTfF1t0yhHJxbjLjeKtXkXQVVhPalUZijVjIgrZfaYRz7WjDfMRFDZcxV8i3sXooA__'
},

]


const Carousel = () => {
  return (
    <Box sx={{ width: '85%', margin: 'auto' }}>
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true} 
      autoplay={{
        delay: 5000, 
        disableOnInteraction: false,
      }}
    >
    {sliderURLs.map((slide, index) => (
        <SwiperSlide key = {index}>
            <CarouselImage key = {index}  url = {slide.url}></CarouselImage>
        </SwiperSlide>
    ))}
    </Swiper>
    </Box>
  );
};

export default Carousel
