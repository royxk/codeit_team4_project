import React, { useEffect, useState } from "react";
import CardBlue from "../components/core/CardList/CardBlue";
import styled from "styled-components";
import "swiper/css";
import { getAllRecipients } from "../apiFetcher/recipients/getAllRecipients";

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

  const fetchRecipients = async (totalRecipients) => {
    const response = getAllRecipients(totalRecipients).then((res) => {
      console.log("전체조회...");
      console.log(res.data.results.length);
      setRecipients(res.data.results);
      return res.data;
    });
  };

  useEffect(() => {
    getTotalRecipients();
    fetchRecipients(totalRecipients);
  }, []);

  return (
    console.log(totalRecipients),
    (
      <div>
        <S.CardsContainer>
          {recipients.map((recipient) => (
            <div key={recipient.key}>
              <div>name :{recipient.name}</div>
            </div>
          ))}
        </S.CardsContainer>
      </div>
    )
  );
};

export default List;

const S = {
  SliderContainer: styled.div`
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  CardsContainer: styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
  `,
};
