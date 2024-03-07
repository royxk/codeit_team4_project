import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import Button from "./Button/Button.jsx";
import { media } from "../../styles/utils/mediaQuery.ts";

function NavBar({ ...props }) {
  console.log(props);
  return (
    <S.NavBarContainer paddingInline={props.paddingInline}>
      <S.NavBar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <S.LogoWrapper>
            <img src={logo} alt="logo" />
            <p>Rolling</p>
          </S.LogoWrapper>
        </Link>
        <Link to="/papercreate">
          <S.ButtonContainer visible={props.buttonVisible}>
            <Button variant="outLine" size={40}>
              <S.InnerButton>롤링 페이퍼 만들기</S.InnerButton>
            </Button>
          </S.ButtonContainer>
        </Link>
      </S.NavBar>
    </S.NavBarContainer>
  );
}

export default NavBar;

const S = {
  NavBar: styled.div`
    display: flex;
    padding: 11px 0;
    width: 100%;
    height: 65px;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  `,
  LogoWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.colors.black};
  `,

  InnerButton: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    width: fit-content;

    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: ${({ theme }) => theme.lineHeights.xl};
  `,

  ButtonContainer: styled.div`
    display: ${(props) => (props.visible ? "block" : "none")};
  `,

  NavBarContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.white};
    padding-inline: ${(props) => props.paddingInline};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey["300"]};
    ${media.widescreen`
        padding: 0 200px;
      `}
  `,
};
