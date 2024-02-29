import styled from "styled-components";
import Trash from "../../../assets/images/Trash.svg";
import ErrorTrash from "../../../assets/images/ErrorTrash.svg";

const TrashButton = () => {
  return (
    <div>
      <StyledTrashButton>
        <img src={Trash}></img>
      </StyledTrashButton>
    </div>
  );
};

export default TrashButton;

const StyledTrashButton = styled.button`
  width: 36px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: 6px;
  padding: 6px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.white};

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
      img {
        content: url(${ErrorTrash});
      }
    }
  }
`;
