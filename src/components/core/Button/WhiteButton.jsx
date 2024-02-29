import styled from "styled-components";

const WhiteButton = (props) => {
  const text = props.text;

  return (
    <div>
      <SecondaryButton>{text}</SecondaryButton>
    </div>
  );
};

export default WhiteButton;

const SecondaryButton = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid;
  border-radius: 6px;
  padding: 7px 16px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.purple[700]};
  border-color: ${({ theme }) => theme.colors.purple[600]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple[100]};
    color: ${({ theme }) => theme.colors.purple[600]};
    border-color: ${({ theme }) => theme.colors.purple[700]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.purple[100]};
    color: ${({ theme }) => theme.colors.purple[800]};
    border-color: ${({ theme }) => theme.colors.purple[600]};
    border: 1px solid;

    &:focus {
      background-color: ${({ theme }) => theme.colors.white};
      border-color: ${({ theme }) => theme.colors.purple[800]};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.grey[300]};
      color: ${({ theme }) => theme.colors.white};
      border: 0px solid;
      cursor: not-allowed;
    }
  }
`;
