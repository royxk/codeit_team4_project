import React from "react";
import styled from "styled-components";
import CButton from "./circleButton";
import SButton from "./SecondaryButton";
import Button40 from "./Button40";
import Button56 from "./Button56";
import Button from "./Button";

const ButtonTest = () => {
  return (
    <S.Container>
      <Button>Test</Button>
      <Button40>Test</Button40>
      <Button56>Test</Button56>
      <CButton>Test</CButton>
      <SButton>Test</SButton>
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
