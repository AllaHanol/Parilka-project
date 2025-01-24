import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CarouselImage from '../Carousel/CarouselImage';
import { Box } from '@mui/material';
import FeedbackCard from './FeedbackCard';

const MockAvatar = 'https://s3-alpha-sig.figma.com/img/eeda/140d/26173db643536f3f2541c9574254fe57?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B4UuN~n4y7nEtmkO8Tc0KwnfZYPkOx8I3tmn0p7PyY35w6DKMeJIPRLoQUJU6jNlvxSk0qDN9YfDVxqLhYHwFb05NyaRgSoeLAxxWiqS9A3Ac7V6V3s3Aqejczv4uNDBhnPca59uEykCJ61tKMC~9rDQbOdooEutQnOrYpH~ltcKvo0WgX8sDGsG1OgcQvm8H2ecn63c2Q5Sx7LATftrJSNc9g8X6FfqJsk-EBkTTd6LndJNq4C2fetNsrTVwmoMjPlyakfYrp9SdyLURADTSs1sDHTXyeyqHBmQ0ogu4CFuPFegIYPt8oVG~RBJQ0lX2X3eyiR5NT6winewximm9A__'
const MockCommentText = 'Замовляв тут свій перший вейп і залишився дуже задоволений. Швидка доставка, ввічливі менеджери та великий вибір рідин.  Рекомендую всім, хто шукає якісну продукцію за доступними цінами!'

const feedbackCards = [
  {
    avatarUrl: MockAvatar,
    username: 'Олексій Петров',
    time: '2024-12-21T12:00:00',
    title: 'Приємний магазин. Великий вибір товарів.',
    commentText: MockCommentText,
    rating: 4.5,
  },
  {
    avatarUrl: MockAvatar,
    username: 'Александр Іванов',
    time: '2024-12-20T12:00:00',
    title: 'Гарний магазин. Якісне обслуговування!',
    commentText: MockCommentText,
    rating: 5.0,
  },
  {
    avatarUrl: MockAvatar,
    username: 'Юлія Сидоренко',
    time: '2024-12-22T12:00:00',
    title: 'Чудове обслуговування. Рекомендую!',
    commentText: MockCommentText,
    rating: 4.7,
  },
  {
    avatarUrl: MockAvatar,
    username: 'Михайло Григоренко',
    time: '2024-12-23T09:00:00',
    title: 'Вражений асортиментом. Замовлення отримав швидко',
    commentText: MockCommentText,
    rating: 4.8,
  },
]


const Feedback = () => {
  return (
    <Box sx={{ width: '100%', }}>
    <Swiper
      spaceBetween={"1.6vw"}
      slidesPerView={2.2}
      slidesOffsetBefore={120}
    >
    {feedbackCards.map((comment, index) => (
        <SwiperSlide key = {index}>
            <FeedbackCard key = {index}  comment = {comment}></FeedbackCard>
        </SwiperSlide>
    ))}
    </Swiper>
    </Box>
  );
};

export default Feedback
