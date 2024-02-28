import NavBar from "../components/core/NavBar";
import styled from "styled-components";
import PointBox from "../components/core/PointBox";
import homeImage1 from "../assets/images/homepageImage1.svg";
import homeImage2 from "../assets/images/homepageImage2.svg";

const Home = () => {
  return (
    <S.HomePageWrapper>
      <S.ContentWrapper>
        <NavBar />
        <S.ContentContainer>
          <PointBox>Point. 01</PointBox>
          <div>누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요</div>
          <div>로그인 없이 자유롭게 만들어요.</div>
          <img src={homeImage1} alt="homeImage1" />
        </S.ContentContainer>
        <S.ContentContainer>
          <PointBox>Point. 02</PointBox>
          <div>누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요</div>
          <div>로그인 없이 자유롭게 만들어요.</div>
          <img src={homeImage2} alt="homeImage1" />
        </S.ContentContainer>
      </S.ContentWrapper>
    </S.HomePageWrapper>
  );
};

export default Home;

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
    gap: 20px;
  `,
  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 20px;
    padding: 20px;
    width: 320px;
    height: 352px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.surface};
  `,
};
