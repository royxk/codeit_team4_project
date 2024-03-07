import { useState } from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";

const ButtonContainer = styled.div`
  display: flex;
  width: 244px;
  height: 40px;
  text-align: center;
`;

const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.xl};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  width: 122px;
  height: 40px;
  padding: 7px 16px;
  gap: 10px;
  border: 2px solid transparent;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.grey[800]};

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.purple[400]};
  }

  &:active {
    border: ${({ theme }) => theme.colors.purple[500]};
    color: ${theme.colors.purple[700]};

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.purple[500]};
    }
  }
  ${(props) =>
    props.active
      ? `
        font-weight: ${theme.fontWeights.bold};
        color: ${theme.colors.purple[700]}; 
        border: 2px solid ${theme.colors.purple[600]};
        background-color: ${theme.colors.white};
        font-weight: ${({ theme }) => theme.fontWeights.bold};
      `
      : `color: ${theme.colors.grey[900]}`}
  font-weight: ${theme.fontWeights.bold};
`;

const ToggleButton = ({ activeOption, setActiveOption }) => {
  return (
    <ButtonContainer>
      <Button
        active={activeOption === "color"}
        onClick={() => {
          setActiveOption("color");
        }}
      >
        컬러
      </Button>
      <Button
        active={activeOption === "image"}
        onClick={() => setActiveOption("image")}
      >
        이미지
      </Button>
    </ButtonContainer>
  );
};

export default ToggleButton;
