import styled from "styled-components";

const SmallButton = (props) => {
  const text = props.text;

  return (
    <div>
      <PrimaryButton40>{text}</PrimaryButton40>
    </div>
  );
};

export default SmallButton;

const PrimaryButton40 = styled.button`
  width: 100%;
  height: 40px;
  border: 2px solid;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.colors.purple[600]};
  padding: 7px 16px;
  gap: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  background-color: ${({ theme }) => theme.colors.purple[600]};
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.purple[700]};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.purple[800]};
    border: 1px solid;
    &:focus {
      background-color: ${({ theme }) => theme.colors.purple[800]};
      border: 2px solid;
      border-color: ${({ theme }) => theme.colors.purple[900]};
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.grey[100]};
      border-color: ${({ theme }) => theme.colors.grey[300]};
      color: ${({ theme }) => theme.colors.grey[400]};
      cursor: not-allowed;
    }
  }
`;
