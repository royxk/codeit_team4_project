import React from 'react';
import styled, { css } from 'styled-components';
import selectedImage from '../../assets/images/selectedImage.svg';

function handleChange(e) {
  e.preventDefault();
  console.log('ColorButton');
  return;
}

const ColorButton = ({ color, onClick, selected }) => {
  console.log(selected);
  return (
    <S.Box type="button" onClick={onClick} color={color} selected={selected}>
      {selected && <S.SelectedImage src={selectedImage} alt="Selected" />}
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
    border-radius: 10px;
    gap: 20px;
    height: 154px;
    background-color: ${({ color }) => color || 'white'};
    ${({ selected }) =>
      selected &&
      css`
        color: white;
      `}
  `,
  SelectedImage: styled.img`
    position: absolute;
  `,
};
