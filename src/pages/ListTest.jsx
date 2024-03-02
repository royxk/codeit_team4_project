// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// const Carousel = ({ items, itemsPerPage }) => {
//   const [currentIndex, setCurrentIndex] = React.useState(0);

//   const next = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + itemsPerPage >= items.length ? 0 : prevIndex + itemsPerPage
//     );
//   };

//   const prev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - itemsPerPage < 0
//         ? items.length - itemsPerPage
//         : prevIndex - itemsPerPage
//     );
//   };

//   const currentItems = items.slice(currentIndex, currentIndex + itemsPerPage);

//   return (
//     <div>
//       <S.CarouselContainer>
//         {currentItems.map((item, index) => (
//           <S.CarouselItem key={index}>{item}</S.CarouselItem>
//         ))}
//       </S.CarouselContainer>
//       <button onClick={prev}>Prev</button>
//       <button onClick={next}>Next</button>
//     </div>
//   );
// };

// const ListTest = () => {
//   const items = [
//     "Item 1",
//     "Item 2",
//     "Item 3",
//     "Item 4",
//     "Item 5",
//     "Item 6",
//     "Item 7",
//     "Item 8",
//   ]; // Example items

//   return (
//     <div className="App">
//       <Carousel items={items} itemsPerPage={4} />
//     </div>
//   );
// };
// export default ListTest;

// const S = {
//   CarouselContainer: styled.div`
//     display: flex;
//     overflow: hidden;
//     width: 100%;
//   `,
//   CarouselItem: styled.div`
//     flex: 0 0 25%;
//     text-align: center;
//   `,
// };

// Import Swiper React components

// Import Swiper styles
import "swiper/css";

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};
