// import React from "react";
// // import { Swiper, SwiperSlide, Navigation } from "swiper/react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css"; // core Swiper
// import "swiper/css/navigation"; // Navigation module

// export default function App() {
//   return (
//     <Swiper
//       // install Swiper modules
//       spaceBetween={50}
//       // slidesPerView={3}
//       // navigation={true} // Enable navigation
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       {/* Add more slides if needed */}
//     </Swiper>
//   );
// }

import React from "react";
import styled from "styled-components";

const ListTest = () => {
  return (
    <S.ScrollContainer>
      <S.ScrollItem>1</S.ScrollItem>
      <S.ScrollItem>2</S.ScrollItem>
      <S.ScrollItem>3</S.ScrollItem>
      <S.ScrollItem>4</S.ScrollItem>
      <S.ScrollItem>5</S.ScrollItem>
      <S.ScrollItem>6</S.ScrollItem>
      <S.ScrollItem>7</S.ScrollItem>
      <S.ScrollItem>8</S.ScrollItem>
      <S.ScrollItem>9</S.ScrollItem>
      <S.ScrollItem>10</S.ScrollItem>
    </S.ScrollContainer>
  );
};

export default ListTest;

const S = {
  ScrollContainer: styled.div`
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  `,

  ScrollItem: styled.div`
    flex: 0 0 auto; /* Prevent flex items from growing or shrinking */
    width: 100vw; /* Assuming you want each item to be the full width of the viewport */
    height: 100vh; /* Example height, adjust as needed */
    scroll-snap-align: start; /* Align the snap point at the start edge of the scroll container */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    border-right: 2px solid #fff;
  `,
};
