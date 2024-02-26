import styled from "styled-components";
import Button56 from "./Button56";
import Button40 from "./Button40";
import SButton from "./SecondaryButton";
import CButton from "./circleButton";

const Home = () => {
  return (
    <S.Container>
      <Button40>HomePage</Button40>
      <Button56>HomePage</Button56>
      <SButton>HomePage</SButton>
      <CButton>HomePage</CButton>
    </S.Container>
  );
};

export default Home;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    background-color: ${({ theme }) => theme.colors.purple[300]};
  `,
};
