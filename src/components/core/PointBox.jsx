import React from "react";
import styled from "styled-components";

const PointBox = ({ children }) => {
  return (
    <S.PointBox>
      <S.PointText>{children}</S.PointText>
    </S.PointBox>
  );
};

export default PointBox;

const S = {
  PointBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 28px;
    background-color: ${({ theme }) => theme.colors.purple[600]};
    border-radius: 50px;
  `,
  PointText: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.white};
  `,
};
