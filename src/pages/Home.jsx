import NavBar from "../components/core/NavBar";
import styled from "styled-components";
import PointBox from "../components/core/PointBox";
import homeImage1 from "../assets/images/homepageImage1.svg";
import homeImage2 from "../assets/images/homepageImg2.png";
import { media } from "../styles/utils/mediaQuery";

const Home = () => {
  return (
    <S.HomePageWrapper>
      <S.ContentWrapper>
        <S.NavContainer>
          <NavBar />
          <button>롤링 페이퍼 만들기</button>
        </S.NavContainer>
        <S.ContentContainer>
          <S.TextContainer>
            <PointBox>Point. 01</PointBox>
            <S.Title>
              누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요
            </S.Title>
            <S.Description>로그인 없이 자유롭게 만들어요.</S.Description>
          </S.TextContainer>

          <S.ImageContainer>
            <S.Image src={homeImage1} alt="homeImage1" />
          </S.ImageContainer>
        </S.ContentContainer>
        <S.ContentContainer reverseOnWidescreen>
          <S.TextContainer>
            <PointBox>Point. 02</PointBox>
            <S.Title>서로에게 이모지로 감정을 표현해보세요</S.Title>
            <S.Description>로그인 없이 자유롭게 만들어요.</S.Description>
          </S.TextContainer>
          <S.ImageContainer>
            <S.Image secondImg src={homeImage2} alt="homeImage1" />
          </S.ImageContainer>
        </S.ContentContainer>
        <button>구경해보기</button>
      </S.ContentWrapper>
    </S.HomePageWrapper>
  );
};

export default Home;

const S = {
  NavContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 20px;
  `,
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
  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 30px;
    padding: 40px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.surface};
    overflow: hidden;

    ${media.widescreen`
      flex-direction: row;
      align-items: center;
      ${({ reverseOnWidescreen }) =>
        reverseOnWidescreen &&
        `
      flex-direction: row-reverse;
    `}
    `}
  `,

  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 20px;
    width: 100%;
  `,
  ImageContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 360px;
    height: 100%;
    overflow: hidden;
    ${media.tablet`
      width: 100%;
    `}
  `,
  Image: styled.img`
    width: 550px;
    ${({ secondImg }) =>
      secondImg &&
      `
      width: 400px;
    `}
    ${media.tablet`
      width: 100%;
    `}
  `,
  Title: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: bold;
  `,
  Description: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: lighter;
  `,
};
