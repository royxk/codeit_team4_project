import styled from "styled-components";

const Button56 = () => {
  return (
    <div>
      <PrimaryButton56>버튼</PrimaryButton56>
    </div>
  );
};

export default Button56;

const PrimaryButton56 = styled.button`
  width: 100%;
  height: 56px;
  border: 2px solid;
  border-radius: 12px;
  padding: 14px 24px;
  gap: 10px;
  border-color: ${({ theme }) => theme.colors.purple[600]};

  font-weight: ${({ theme }) => theme.fontWeights.bold};
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
