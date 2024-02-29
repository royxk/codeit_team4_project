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
  border: 1px solid;
  border-radius: 6px;
  padding: 6px 16px;
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

const BlankSmileButton36 = styled.button`
  width: 100%;
  height: 36px;
  border: 1px solid;
  border-radius: 6px;
  padding: 6px 16px;
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
