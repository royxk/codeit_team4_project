import React from "react";
import styled from "styled-components";

const Input = ({ error, disabled }) => {
  return (
    <S.Input
      type="text"
      placeholder="Placeholder"
      error={error}
      disabled={disabled}
    />
  );
};

export default Input;

const S = {
  Input: styled.input`
    width: 320px;
    height: 50px;
    border-radius: 8px;
    padding: 12px 16px;
    border-color: ${({ theme }) => theme.colors.grey[200]};
    margin: 10px 0;

    &:focus {
      outline: none;
      border-color: ${({ theme, error }) =>
        error ? theme.colors.error : theme.colors.grey[500]};
    }

    &:active {
      border-color: border-color: ${({ theme, error }) =>
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
};
