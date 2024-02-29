import styled from "styled-components";
import Trash from "../../../assets/images/Trash.svg";
import ErrorTrash from "../../../assets/images/ErrorTrash.svg";

const TrashButton = () => {
  return (
    <div>
      <StyledTrashButton disabled>
        <img src={Trash}></img>
      </StyledTrashButton>
    </div>
  );
};

export default TrashButton;

const StyledTrashButton = styled.button`
  width: 36px;
  height: 36px;
  border: 1px solid;
  border-radius: 6px;
  padding: 6px;
  gap: 10px;
  background-color: rgba(255, 255, 255, 1);
  border-color: rgba(204, 204, 204, 1);

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
      img {
        content: url(${ErrorTrash});
      }
    }
  }
`;
