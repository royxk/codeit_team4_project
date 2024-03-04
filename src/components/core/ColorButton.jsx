import React from "react";
import styled, { css } from "styled-components";

function handleChange(e) {
  e.preventDefault();
  console.log("ColorButton");
  return;
}

const ColorButton = ({ color, onClick, selected }) => {
  return (
    <S.Box type="button" onClick={onClick} color={color} selected={selected}>
      ColorButton
    </S.Box>
  );
};

export default ColorButton;

const S = {
  Box: styled.button`
    border: none;
    width: 154px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 154px;
    background-color: ${({ color }) => color || "white"};
    ${({ selected }) =>
      selected &&
      css`
        opacity: 0.5;
      `}
  `,
};
