import React from "react";
import styled from "styled-components";

function handleChange(url) {
  console.log(url);
}

const ImageButton = ({ url, onClick }) => {
  return (
    <S.Box onClick={onClick} $paint={url}>
      ImageButton
    </S.Box>
  );
};

export default ImageButton;

const S = {
  Box: styled.button`
    background-image: url(${({ $paint }) => $paint});
    background-size: cover;
    border: none;
    width: 154px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 154px;
  `,
};
