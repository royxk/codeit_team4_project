import React from "react";
import styled from "styled-components";

function handleChange(e) {
  e.preventDefault();
  console.log("ColorButton");
  return;
}

const ColorButton = ({ color }) => {
  return (
    <S.Box onClick={handleChange} color={color}>
      ColorButton
    </S.Box>
  );
};

export default ColorButton;

const S = {
  Box: styled.button`
    width: 154px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 154px;
    background-color: ${({ color }) => color || "white"};
  `,
};
