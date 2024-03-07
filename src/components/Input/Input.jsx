import React from "react";
import styled from "styled-components";

const Input = ({...props}) => {
    console.log(props);
  return (
      <S.EntireInputBox width={props.width}>
        <S.Input type="text"
                 id={props.id}
                 placeholder={props.placeholder}
                 onChange={props.onChange}
                 $error={props.error}
                 maxLength={props.maxLength}
                 ref={props.reference}
        />
        <S.ErrorBox $error={props.error}>{props.errorMessage}</S.ErrorBox>
      </S.EntireInputBox>
  );
};

export default Input;

const S = {
  EntireInputBox:styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: fit-content;
    gap: 4px;
  `,

  Input: styled.input`
    width: 100%;
    height: 50px;
    border-radius: 8px;
    padding: 12px 16px;
    border: 1px solid ${({ theme }) => theme.colors.grey[200]};
    margin: 10px 0;
    overflow: hidden;

    &:focus {
      outline: none;
      border-color: ${({ theme, error }) =>
        error ? theme.colors.error : theme.colors.grey[500]};
    }

    &:active {
      border-color: ${({ theme, error }) =>
        error ? theme.colors.error : theme.colors.grey[700]};
    }

    &:hover {
      border-color: ${({ theme, error }) =>
        error ? theme.colors.error : theme.colors.grey[500]};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.grey[100]};
      border-color: ${({ theme }) => theme.colors.grey[300]};
      color: ${({ theme }) => theme.colors.grey[400]};
      cursor: not-allowed;
    }
  `,

  ErrorBox:styled.div`
    display: ${(props) => props.$error === "true" ? 'flex' : 'none'};
    color: ${({theme}) => theme.colors.error};
    font-size: ${({theme}) => theme.fontSizes.xxxs};
    padding-left: 6px;
  `
};
