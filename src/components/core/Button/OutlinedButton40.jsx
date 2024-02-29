import styled from "styled-components";
import Smile from "../../../assets/images/Smile.svg";

export const OutlinedButton40 = (props) => {
  const text = props.text;

  return (
    <div>
      <BlankButton40>{text}</BlankButton40>
    </div>
  );
};

export const OutlinedSmileButton40 = (props) => {
  const text = props.text;

  return (
    <div>
      <BlankSmileButton40>
        <img src={Smile}></img>
        {text}
      </BlankSmileButton40>
    </div>
  );
};

const BlankButton40 = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid;
  border-radius: 6px;
  padding: 8px 16px;
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

const BlankSmileButton40 = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid;
  border-radius: 6px;
  padding: 8px 16px;
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
