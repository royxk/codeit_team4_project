import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ButtonTest = () => {
  return (
    <S.Container>
      <Button>Test</Button>
      {/* <SButton>HomePage</SButton> */}
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
