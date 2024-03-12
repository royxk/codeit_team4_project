import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAllRecipients } from "../apiFetcher/recipients/getAllRecipients";
import Card from "../components/core/CardList/Card";
import NavBar from "../components/core/NavBar";
import { media } from "../styles/utils/mediaQuery";
import Button from "../components/core/Button/Button";
import ArrowLeftButton from "../components/core/Button/ArrowLeftButton";
import ArrowRightButton from "../components/core/Button/ArrowRightButton";
import Loading from "../components/core/Loading";
import FetchMore1 from "../utils/FetchMore1";
import FetchMore2 from "../utils/FetchMore2";
const List = () => {
  const navigate = useNavigate();
  const [populartRecipients, setPopularRecipients] = useState([]);
  const [recentRecipients, setRecentRecipients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const cardsContainerRef1 = useRef();
  const cardsContainerRef2 = useRef();

  const [page, setPage1] = useState(0);
  const [slice, setSlice] = useState(0);

  const onClick = (link) => {
    navigate(`/${link}`);
  };

  const getTotalRecipients = async (index) => {
    const response = getAllRecipients(index, 0).then((res) => {
      return res.data.results.length;
    });
    return response;
  };

  const scrollCards = (direction, ref) => {
    if (ref.current) {
      const { current } = ref;
      const scrollAmount = 600;
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
      state: { color: backgroundColor, img: backgroundImageURL },
    });
  };

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const index = await getTotalRecipients(slice);
      console.log(page);
      await getAllRecipients(index).then((res) => {
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
  }, [page]);

  return (
    <S.HomePageWrapper>
      {isLoading && <Loading loading={isLoading}></Loading>}
      <NavBar buttonVisible={true} paddingInline="24px" />
      <S.ContentContainer>
        <S.Title>인기 롤링 페이퍼 🔥</S.Title>

        <S.ButtonCardsContainer>
          <S.ArrowButtonStyle className="left">
            <ArrowLeftButton
              onClick={() => scrollCards("left", cardsContainerRef1)}
            />
          </S.ArrowButtonStyle>
          <S.CardsContainer ref={cardsContainerRef1}>
            {populartRecipients.map((recipient) => (
              <S.Card
                key={recipient.id}
                onClick={() => handleCardClick(recipient)}
              >
                <Card data={recipient} />
              </S.Card>
            ))}
            <FetchMore1
              loading={page !== 0 && isLoading}
              setPage={setPage1}
              slice={setSlice}
            />
          </S.CardsContainer>
          <S.ArrowButtonStyle className="right">
            <ArrowRightButton
              onClick={() => scrollCards("right", cardsContainerRef1)}
            />
          </S.ArrowButtonStyle>
        </S.ButtonCardsContainer>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.Title>최근에 만든 롤링 페이퍼 ⭐️</S.Title>
        <S.ButtonCardsContainer>
          <S.ArrowButtonStyle className="left">
            <ArrowLeftButton
              onClick={() => scrollCards("left", cardsContainerRef2)}
            />
          </S.ArrowButtonStyle>
          <S.CardsContainer ref={cardsContainerRef2}>
            {recentRecipients.map((recipient) => (
              <S.Card
                key={recipient.id}
                onClick={() => handleCardClick(recipient)}
              >
                <Card data={recipient} />
              </S.Card>
            ))}
            <FetchMore2
              loading={page !== 0 && isLoading}
              setPage={setPage1}
              slice={setSlice}
            />
          </S.CardsContainer>
          <S.ArrowButtonStyle className="right">
            <ArrowRightButton
              onClick={() => scrollCards("right", cardsContainerRef2)}
            />
          </S.ArrowButtonStyle>
        </S.ButtonCardsContainer>{" "}
      </S.ContentContainer>
      <S.BottomButtonWrapper>
        <Button
          variant="primary"
          size={40}
          onClick={() => onClick("papercreate")}
        >
          나도 만들어보기
        </Button>
      </S.BottomButtonWrapper>
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
    gap: 50px;
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

  ButtonWrapper: styled.div`
    width: 300px;
  `,

  BottomButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;

    width: 100%;
    padding: 0 20px;
    ${media.widescreen`
    width: 300px;
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
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
    position: relative;

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

  ArrowButtonStyle: styled.div`
    position: absolute;
    top: 50%; /* Center vertically */
    transform: translateY(-70%); /* Adjust for exact centering */
    cursor: pointer; /* Optional: makes it clear the arrows are clickable */
    z-index: 1;
    &.left {
      left: 180px; /* Position at the start (left side) */
    }

    &.right {
      right: 180px; /* Position at the end (right side) */
    }
  `,

  CardsContainer: styled.div`
    padding-left: 20px;
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-snap-align: center;
    position: relative;
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
