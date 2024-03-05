import styled, { css } from "styled-components";
import { textStyle } from "./ButtonText";
import Smile from "../../../assets/images/Smile.svg";

const Button = ({ variant = "primary", size, ...props }) => {
  const SmileImage = variant == "outLineSmile" ? Smile : null;

  const { children } = props;
  return (
    <S.Button variant={variant} size={size} {...props}>
      <img src={SmileImage}></img>
      {children}
    </S.Button>
  );
};

export default Button;

const S = {
  Button: styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${textStyle("base", 400)};
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 6px;

    ${({ variant }) => buttonVariantMap[variant]};

    ${({ size }) => buttonSizeMap[size]};
  `,
};

const buttonVariantMap = {
  primary: css`
    padding: 14px 24px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.purple[600]};

    &:hover {
      background-color: ${({ theme }) => theme.colors.purple[700]};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.purple[800]};

      &:focus {
        background-color: ${({ theme }) => theme.colors.purple[800]};
        border: 2px solid ${({ theme }) => theme.colors.purple[900]};
      }
      &:disabled {
        background-color: ${({ theme }) => theme.colors.grey[100]};
        border-color: ${({ theme }) => theme.colors.grey[300]};
        color: ${({ theme }) => theme.colors.grey[400]};
        cursor: not-allowed;
      }
    }
  `,

  secondary: css`
    padding: 14px 24px;
    border: 1px solid ${({ theme }) => theme.colors.purple[600]};
    color: ${({ theme }) => theme.colors.purple[700]};
    background-color: ${({ theme }) => theme.colors.white};

    &:hover {
      background-color: ${({ theme }) => theme.colors.purple[100]};
      border: 1px solid ${({ theme }) => theme.colors.purple[700]};
      color: ${({ theme }) => theme.colors.purple[600]};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.purple[100]};
      color: ${({ theme }) => theme.colors.purple[600]};
      border: 1px solid ${({ theme }) => theme.colors.purple[800]};

      &:focus {
        background-color: ${({ theme }) => theme.colors.white};
        border-color: ${({ theme }) => theme.colors.purple[800]};
        color: rgba(151, 71, 255, 1);
      }

      &:disabled {
        background-color: ${({ theme }) => theme.colors.grey[300]};
        color: ${({ theme }) => theme.colors.white};
        border: 0px solid;
        cursor: not-allowed;
      }
    }
  `,

  outLine: css`
    padding: 14px 24px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.grey[300]};
    color: ${({ theme }) => theme.colors.grey[900]};

    &:hover {
      background-color: ${({ theme }) => theme.colors.grey[100]};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.grey[100]};

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
  `,

  outLineSmile: css`
    padding: 14px 24px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.grey[300]};
    color: ${({ theme }) => theme.colors.grey[900]};

    &:hover {
      background-color: ${({ theme }) => theme.colors.grey[100]};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.grey[100]};

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
  `,
};

const buttonSizeMap = {
  56: css`
    ${textStyle("bold", "bold", "base", "xxl")};
    height: 56px;
    border-radius: 12px;
  `,

  40: css`
    ${textStyle("base", 400, "sm", "xl")};
    height: 40px;
  `,

  36: css`
    ${textStyle("base", 500, "sm")};
    line-heights: 24px;
    height: 36px;
  `,

  28: css`
    ${textStyle("base", 400, "xxs")};
    line-heights: 20px;
    height: 28px;
  `,
};
