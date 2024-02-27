import styled from "styled-components";

const CircleButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  border: 0px solid;
  background-color: ${({ theme }) => theme.colors.grey[500]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey[600]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.grey[700]};
    border: 1px solid;

    &:focus {
      background-color: ${({ theme }) => theme.colors.grey[700]};
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.grey[800]};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.grey[300]};
      cursor: not-allowed;
    }
  }
`;

const CButton = () => {
  return <CircleButton></CircleButton>;
};

export default CButton;
