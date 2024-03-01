import React, { useEffect } from "react";
import { useState } from "react";
import { getAllRecipients } from "../apiFetcher/recipients/getAllRecipients";
import CardBlue from "../components/core/CardList/CardBlue";
import styled from "styled-components";

const List = () => {
  const [recipients, setRecipients] = useState([]);
  const [nextUrl, setNextUrl] = useState(
    "https://rolling-api.vercel.app/4-4/recipients/?limit=4"
  );

  const fetchRecipients = async () => {
    if (!nextUrl) return;
    const response = await fetch(nextUrl);
    const data = await response.json();
    setRecipients((prev) => [...prev, ...data.results]);
    setNextUrl(data.next);
  };

  const handleNextClick = () => {
    fetchRecipients();
  };

  useEffect(() => {
    // fetchRecipientsNumber();
    fetchRecipients();
  }, []);
  return (
    <>
      <S.CardContainer>
        {recipients.map((recipient) => (
          <CardBlue
            key={recipient.id}
            name={recipient.name}
            messageCount={recipient.messageCount} // Assuming you have a messageCount or similar data
            // Add other props as needed
          />
        ))}
        <button onClick={handleNextClick}>Load More</button>
      </S.CardContainer>
    </>
  );
};

export default List;

const S = {
  CardContainer: styled.div`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
    width: 100%;
  `,
};
