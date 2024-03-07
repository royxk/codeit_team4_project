import React from "react";
import styled, { css } from "styled-components";
import selectedImage from "../../assets/images/selectedImage.svg";

const ImageButton = ({ url, onClick, isSelected }) => {
  return (
    <S.Box onClick={onClick} $paint={url} isSelected={isSelected}>
      {isSelected && <S.SelectedImage src={selectedImage} alt="Selected" />}
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
    border-radius: 10px;
    ${({ isSelected }) =>
      isSelected &&
      css`
        opacity: 0.5;
      `}
  `,
  SelectedImage: styled.img`
    position: absolute;
  `,
};
