import styled from "styled-components";
import { useState } from "react";
import upArrow from "../../assets/images/upArrow.svg"
import downArrow from "../../assets/images/downArrow.svg"

const DropdownWrapper = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
`;

const DropdownButton = styled.button`
    display: flex;
    white-space: nowrap;
    justify-content: space-between;
    width: 320px;
    height: 50px;
    border-radius: 8px;
    padding: 12px 16px;
    gap: 192px;
    margin-bottom: 8px;
    text-align: left;
    font-family: ${({ theme }) => theme.fontFamily.base};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: ${({ theme }) => theme.lineHeights.xl};
    border: 1px solid ${({theme}) => theme.colors.grey[500]};
    color: ${({theme}) => theme.colors.grey[900]};

    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.grey[500]};
      }

      &:active {
        border: 2px solid ${({ theme }) => theme.colors.grey[500]};
  
        &:focus {
          border: 2px solid ${({ theme }) => theme.colors.grey[500]};
        }

        &:disabled {
          border: 1px solid ${({ theme }) => theme.colors.grey[300]};
          color: ${({ theme }) => theme.colors.grey[100]};
          cursor: not-allowed;
        }
      }
`;

const DropdownMenu = styled.div`
  width: 320px;
  height: auto;
  list-style: none;
  padding: 10px 1px;
  position: absolute;
  top: 100%;
  box-shadow: 0px 2px 12px 0px #00000014;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: 8px;
  z-index: 1;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: visibility 0.2s, opacity 0.2s;
`;

const DropdownItem = styled.div`
    white-space: nowrap;
    font-family: ${({ theme }) => theme.fontFamily.base};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: ${({ theme }) => theme.lineHeights.xl};
    padding: 12px 16px;
    width: 316px;
    height: 50px;
    gap: 10px;
    color: ${({theme}) => theme.colors.grey[900]};

    &:hover {
        background-color: ${({theme}) => theme.colors.grey[300]};
        border: 1px solid ${({theme}) => theme.colors.grey[300]};
        border-radius: 6px;
    }
`;

const ArrowIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const Dropdown = ({children, event, ...props}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  const Items = props.item.map((element) => (<DropdownItem onClick={() => {event(); handleItemClick();}}>{element}</DropdownItem>) )

  return (
    <DropdownWrapper>
      <DropdownButton onClick={handleToggleDropdown}>
      {children}
        <ArrowIcon src={isOpen ? downArrow : upArrow} alt="arrow"/>
      </DropdownButton>
      <DropdownMenu isOpen={isOpen}>
        {Items}
      </DropdownMenu>
    </DropdownWrapper>
  );
};
export default Dropdown;