import styled from "styled-components";

const OutlinedButton56 = (props) => {
  const text = props.text;

  return (
    <div>
      <BlankButton56>{text}</BlankButton56>
    </div>
  );
};

export default OutlinedButton56;

const BlankButton56 = styled.button`
  width: 100%;
  height: 56px;
  border: 1px solid;
  border-radius: 12px;
  padding: 14px 16px;
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
