import arrowLeftButton from "../../../assets/images/arrowLeftButton.svg";
import styled from "styled-components";

const ArrowLeftButton = ({ ...props }) => {
  return (
    <StyledArrowButton {...props}>
      <img src={arrowLeftButton}></img>
    </StyledArrowButton>
  );
};

export default ArrowLeftButton;

const StyledArrowButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 8px 0px #00000014;

  &:hover {
    border-color: ${({ theme }) => theme.colors.grey[400]};
  }

  &:active {
    border-color: ${({ theme }) => theme.colors.grey[300]};

    &:focus {
      border-color: ${({ theme }) => theme.colors.grey[500]};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.grey[300]};
      border-color: ${({ theme }) => theme.colors.grey[300]};
      color: ${({ theme }) => theme.colors.white};
      cursor: not-allowed;
    }
  }
`;
