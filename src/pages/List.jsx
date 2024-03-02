import React, { useEffect, useState } from "react";
import CardBlue from "../components/core/CardList/CardBlue";
import styled from "styled-components";
import "swiper/css";
import { getAllRecipients } from "../apiFetcher/recipients/getAllRecipients";
import { Swiper, SwiperSlide } from "swiper/react";

const List = () => {
  const [recipients, setRecipients] = useState([]);
  // const [visibleRecipients, setVisibleRecipients] = useState([]);
  const [totalRecipients, setTotalRecipients] = useState(0);

  const getTotalRecipients = async () => {
    const response = getAllRecipients().then((res) => {
      console.log("전체조회...");
      console.log(res.data);
      setTotalRecipients(res.data.count);
      return res.data;
    });
  };

  const fetchRecipients = async () => {
    getTotalRecipients();
    const response = getAllRecipients(totalRecipients).then((res) => {
      console.log("전체조회...");
      console.log(res.data.results.length);
      setRecipients(res.data.results);
      return res.data;
    });
  };

  useEffect(() => {
    fetchRecipients(totalRecipients);
  }, []);

  return (
    <Swiper spaceBetween={50} slidePerVide={1}>
      <S.CardsContainer>
        {recipients.map((recipient) => (
          <SwiperSlide>
            <S.Card>{recipient.name}</S.Card>
          </SwiperSlide>
        ))}
      </S.CardsContainer>
    </Swiper>
  );
};

export default List;

const S = {
  CardsContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 20px;
  `,
  Card: styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid black;
  `,
};
