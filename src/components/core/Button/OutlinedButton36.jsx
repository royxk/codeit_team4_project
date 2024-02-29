import styled from "styled-components";
import Smile from "../../../assets/images/Smile.svg";

export const OutlinedButton36 = (props) => {
  const text = props.text;

  return (
    <div>
      <BlankButton36>{text}</BlankButton36>
    </div>
  );
};

export const OutlinedSmileButton36 = (props) => {
  const text = props.text;

  return (
    <div>
      <BlankSmileButton36>
        <img src={Smile}></img>
        {text}
      </BlankSmileButton36>
    </div>
  );
};

const BlankButton36 = styled.button`
  width: 100%;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: 6px;
  padding: 6px 16px;
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

const BlankSmileButton36 = styled.button`
  width: 100%;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: 6px;
  padding: 6px 16px;
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
