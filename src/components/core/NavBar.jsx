import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

function NavBar({ ...props }) {
  return (
    <S.NavBar {...props}>
      <img src={logo} alt="logo" />
      Rolling
    </S.NavBar>
  );
}

export default NavBar;

const S = {
  NavBar: styled.button`
    display: flex;
    padding: 11px 0;
    width: 100%;
    height: 65px;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    border: none;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  `,
};
