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
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: 12px;
  padding: 14px 16px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold}
  color: ${({ theme }) => theme.colors.grey[900]};

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
