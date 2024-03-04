import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  getAllRecipients,
  getRecipient,
} from "../apiFetcher/recipients/getAllRecipients";
import TopEmojiBlock from "../components/header/emoji/TopEmojiBlock";
import Card from "../components/core/CardList/Card";
import NavBar from "../components/core/NavBar";
import { media } from "../styles/utils/mediaQuery";
import FetchMoreRecipients from "../utils/FetchMoreRecipients";

const List = () => {
  // const [recipients, setRecipients] = useState([]);
  // const [recipient2777, setRecipient2777] = useState([]);

  const [populartRecipients, setPopularRecipients] = useState([]);
  const [recentRecipients, setRecentRecipients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const cardsContainerRef1 = useRef();
  const cardsContainerRef2 = useRef();
  const navigate = useNavigate();

  const getTotalRecipients = async () => {
    const response = getAllRecipients().then((res) => {
      return res.data.count;
    });
    return response;
  };

  // const fetch2777 = async () => {
  //   getRecipient(2777).then((res) => {
  //     console.log("2777 조회...");
  //     setRecipient2777(res.data);
  //     return res.data;
  //   });
  // };

  const fetchRecipients = async (index) => {
    const response = await getAllRecipients(index).then((res) => {
      console.log("전체조회...");
      console.log(res.data.results.length);
      setRecipients(res.data.results);
      setIndex((prev) => prev + 7);
      return res.data.results;
    });

    return response;
  };

  const scrollCards = (direction, ref) => {
    if (ref.current) {
      const { current } = ref;
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

  const handleCardClick = (recipient) => {
    const { id, backgroundColor, backgroundImageURL } = recipient;

    navigate(`/post/${id}`, {
      background: { color: backgroundColor, img: backgroundImageURL },
    });
  };

  useEffect(() => {
    // fetch2777();

    setIsLoading(true);
    async function fetchData() {
      const count = await getTotalRecipients();
      const list = await getAllRecipients(count).then((res) => {
        console.log("전체조회...");
        console.log(res.data.results.length);
        const sortedByPopularity = [...res.data.results].sort(
          (a, b) =>
            b.messageCount - a.messageCount || b.reactionCount - a.reactionCount
        );
        const sortedByRecent = [...res.data.results].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPopularRecipients(sortedByPopularity);
        setRecentRecipients(sortedByRecent);
        setIsLoading(false);
        return res.data.results;
      });
    }
    fetchData();

    // const fetchData = async () => {
    //   const count = await getTotalRecipients();
    //   console.log(count);
    //   await fetchRecipients(count);
    // };
    // fetchData();
  }, []);

  return (
    <S.HomePageWrapper>
      <S.NavContainer>
        <NavBar />
        <button>롤링 페이퍼 만들기</button>
      </S.NavContainer>
      <S.ContentContainer>
        <S.Title>
          인기 롤링 페이퍼 🔥 {isLoading && <div>로딩중...</div>}
        </S.Title>

        <S.ButtonCardsContainer>
          <button onClick={() => scrollCards("left", cardsContainerRef1)}>
            Left
          </button>
          <S.CardsContainer ref={cardsContainerRef1}>
            {populartRecipients.map((recipient) => (
              <S.Card
                key={recipient.key}
                onClick={() => handleCardClick(recipient)}
              >
                <Card
                  key={recipient.key}
                  name={recipient.name}
                  backgroundColor={recipient.backgroundColor}
                  backgroundImageURL={recipient.backgroundImageURL}
                  // emojiData={recipient2777.topReactions}
                  messageCount={recipient.messageCount}
                />
              </S.Card>
            ))}

            {/* <FetchMoreRecipients loading={loading} setPage={setPage} /> */}
          </S.CardsContainer>
          <button onClick={() => scrollCards("right", cardsContainerRef1)}>
            Right
          </button>
        </S.ButtonCardsContainer>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.Title>
          최근에 만든 롤링 페이퍼⭐️{isLoading && <div>로딩중...</div>}
        </S.Title>
        <S.ButtonCardsContainer>
          <button onClick={() => scrollCards("left", cardsContainerRef2)}>
            Left
          </button>
          <S.CardsContainer ref={cardsContainerRef2}>
            {recentRecipients.map((recipient) => (
              <S.Card
                key={recipient.key}
                onClick={() => handleCardClick(recipient)}
              >
                <Card
                  key={recipient.key}
                  name={recipient.name}
                  backgroundColor={recipient.backgroundColor}
                  backgroundImageURL={recipient.backgroundImageURL}
                  // emojiData={recipient2777.topReactions}
                  messageCount={recipient.messageCount}
                />
              </S.Card>
            ))}
          </S.CardsContainer>
          <button onClick={() => scrollCards("right", cardsContainerRef2)}>
            Right
          </button>
        </S.ButtonCardsContainer>
      </S.ContentContainer>
      <button>구경해보기</button>
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
    gap: 70px;
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
    padding: 0 40px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.grey[200]};
    ${media.widescreen`
    padding: 0 200px;
    `}
  `,

  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 30px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,
  Title: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: bold;
    padding: 0 40px;
    ${media.widescreen`
    padding: 0 200px;
    `}
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
    padding: 0 200px;
    button {
      display: inline-block;
    }
    `}
  `,

  CardsContainer: styled.div`
    padding-left: 20px;
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-snap-align: center;
    gap: 50px;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  Card: styled.div`
    flex: 0 0 auto;
    width: 250px;
    height: 100%;
  `,
};
