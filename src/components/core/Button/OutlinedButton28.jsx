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
  border: 1px solid;
  border-radius: 6px;
  padding: 2px 16px;
  gap: 10px;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(204, 204, 204, 1);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: rgba(24, 24, 24, 1);

  &:hover {
    background-color: rgba(246, 246, 246, 1);
  }

  &:active {
    background-color: rgba(246, 246, 246, 1);
    border-color: rgba(204, 204, 204, 1);

    &:focus {
      background-color: rgba(255, 255, 255, 1);
      border-color: rgba(85, 85, 85, 1);
    }

    &:disabled {
      background-color: rgba(204, 204, 204, 1);
      border-color: rgba(204, 204, 204, 1);
      color: rgba(255, 255, 255, 1);
      cursor: not-allowed;
    }
  }
`;

const BlankSmileButton28 = styled.button`
  width: 100%;
  height: 28px;
  border: 1px solid;
  border-radius: 6px;
  padding: 2px 16px;
  gap: 10px;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(204, 204, 204, 1);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: rgba(24, 24, 24, 1);

  &:hover {
    background-color: rgba(246, 246, 246, 1);
  }

  &:active {
    background-color: rgba(246, 246, 246, 1);
    border-color: rgba(204, 204, 204, 1);

    &:focus {
      background-color: rgba(255, 255, 255, 1);
      border-color: rgba(85, 85, 85, 1);
    }

    &:disabled {
      background-color: rgba(204, 204, 204, 1);
      border-color: rgba(204, 204, 204, 1);
      color: rgba(255, 255, 255, 1);
      cursor: not-allowed;
    }
  }
`;
