import styled from "styled-components";
import BicButton from "./BicButton";
import SmallButton from "./SmallButton";
import CircleButton from "./CircleButton";
import WhiteButton from "./WhiteButton";

const ButtonTest = () => {
  return (
    <S.Container>
      <BicButton>Test</BicButton>
      <SmallButton>Test</SmallButton>
      <CircleButton>Test</CircleButton>
      <WhiteButton>Test</WhiteButton>
    </S.Container>
  );
};

export default ButtonTest;

const S = {
  Container: styled.div`
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    background-color: ${({ theme }) => theme.colors.purple[300]};
  `,
};
