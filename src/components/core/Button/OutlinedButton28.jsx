import styled from "styled-components";
import Smile from "../../../assets/images/Smile.svg";

export const OutlinedButton28 = (props) => {
  const text = props.text;

  return (
    <div>
      <BlankButton28>{text}</BlankButton28>
    </div>
  );
};

export const OutlinedSmileButton28 = (props) => {
  const text = props.text;

  return (
    <div>
      <BlankSmileButton28>
        <img src={Smile}></img>
        {text}
      </BlankSmileButton28>
    </div>
  );
};

const BlankButton28 = styled.button`
  width: 100%;
  height: 28px;
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: 6px;
  padding: 2px 16px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.grey[900]};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey[100]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.grey[100]};
    border-color: ${({ theme }) => theme.colors.grey[300]};

    &:focus {
      background-color: ${({ theme }) => theme.colors.white};
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

const BlankSmileButton28 = styled.button`
  width: 100%;
  height: 28px;
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: 6px;
  padding: 2px 16px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.grey[900]};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey[100]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.grey[100]};
    border-color: ${({ theme }) => theme.colors.grey[300]};

    &:focus {
      background-color: ${({ theme }) => theme.colors.white};
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
