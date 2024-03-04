import React, { useEffect, useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
import "swiper/css";
import {
  getAllRecipients,
  getRecipient,
} from "../apiFetcher/recipients/getAllRecipients";
import TopEmojiBlock from "../components/header/emoji/TopEmojiBlock";
import CardBlue from "../components/core/CardList/CardBlue";
import NavBar from "../components/core/NavBar";
import { media } from "../styles/utils/mediaQuery";

const List = () => {
  const [recipients, setRecipients] = useState([]);
  const [loadedCount, setLoadedCount] = useState(8);
  const [hasMore, setHadMore] = useState(true);
  const [isLoadning, setIsLoading] = useState(false);
  const [totalRecipients, setTotalRecipients] = useState(0);
  const [recipient2777, setRecipient2777] = useState([]);
  const cardsContainerRef = useRef(null);
  const observerRef = useRef(null);

  const getTotalRecipients = async () => {
    const response = getAllRecipients().then((res) => {
      setTotalRecipients(res.data.count);
      return res.data.count;
    });
    return response;
  };

  const fetchRecipients = async (count) => {
    const response = await getAllRecipients(count).then((res) => {
      console.log("전체조회...");
      console.log(res.data.results.length);
      setRecipients(res.data.results);
      return res.data;
    });
  };

  const fetchRecipientsTest = async () => {
    if (!hasMore || isLoadning) return;

    setIsLoading(true);

    const response = await getAllRecipients(loadedCount).then((res) => {
      console.log(loadedCount);
      if (res.data.results.count < loadedCount) {
        setHadMore(false);
      }
      setRecipients((prevRecipients) => [
        ...prevRecipients,
        ...res.data.results,
      ]);
      return res.data;
    });
  };

  const fetch2777 = async () => {
    getRecipient(2777).then((res) => {
      console.log("2777 조회...");
      setRecipient2777(res.data);
      return res.data;
    });
  };

  const scrollCards = (direction) => {
    if (cardsContainerRef.current) {
      const { current } = cardsContainerRef;
      const scrollAmount = 500;
      const scrollPosition =
        direction === "left"
          ? current.scrollLeft - scrollAmount
          : current.scrollLeft + scrollAmount;

      current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLoadedCount((prevCount) => prevCount + 8); // Load 8 more items
        }
      },
      { threshold: 1.0 } // Trigger when the observed element is fully visible
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasMore]);

  useEffect(() => {
    // fetch2777();
    // const fetchData = async () => {
    //   const count = await getTotalRecipients();
    //   console.log(count);
    //   await fetchRecipients(count);
    //   await fetchRecipients();
    // };
    fetchRecipientsTest();
  }, [loadedCount]);

  return (
    <S.HomePageWrapper>
      <S.ContentWrapper>
        <S.NavContainer>
          <NavBar />
          <button>롤링 페이퍼 만들기</button>
        </S.NavContainer>
        <S.ContentContainer>
          <S.Title>인기 롤링 페이퍼 🔥</S.Title>
          <S.ButtonCardsContainer>
            <button onClick={() => scrollCards("left")}> Left</button>

            <S.CardsContainer ref={cardsContainerRef}>
              {recipients.map((recipient, index) => (
                <S.Card key={index} onClick={() => console.log("click")}>
                  <CardBlue
                    key={recipient.key}
                    name={recipient.name}
                    // emojiData={recipient2777.topReactions}
                    messageCount={recipient.messageCount}
                  />
                </S.Card>
              ))}
            </S.CardsContainer>

            <button onClick={() => scrollCards("right")}> Right</button>
          </S.ButtonCardsContainer>
        </S.ContentContainer>
        <S.ContentContainer>
          <S.Title>최근에 만든 롤링 페이퍼⭐️</S.Title>
          <S.CardsContainer>
            {recipients.map((recipient) => (
              <S.Card>
                <CardBlue
                  key={recipient.key}
                  name={recipient.name}
                  // emojiData={recipient2777.topReactions}
                  messageCount={recipient.messageCount}
                />
              </S.Card>
            ))}
            <div ref={observerRef}></div>
          </S.CardsContainer>
        </S.ContentContainer>
        <button>구경해보기</button>
      </S.ContentWrapper>
    </S.HomePageWrapper>
  );
};

export default List;

const S = {
  HomePageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: center;
    gap: 20px;
    width: 100%;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    padding: 0 40px;
    gap: 20px;

    ${media.widescreen`
    padding: 0 200px;
  `}
  `,
  NavContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 20px;
  `,

  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 30px;
    padding: 40px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.surface};
    overflow: hidden;
  `,
  Title: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: bold;
  `,

  ButtonCardsContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 20px;

    button {
      display: none;
    }

    ${media.widescreen`
    button {
      display: inline-block;
    }
    `}
  `,

  CardsContainer: styled.div`
    padding-left: 20px;
    display: flex;
    width: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-snap-align: center;
    gap: 50px;
  `,
  Card: styled.div`
    flex: 0 0 auto;
    width: 250px;
    height: 100%;
  `,
};
