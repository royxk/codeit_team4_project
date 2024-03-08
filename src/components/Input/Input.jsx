import React from "react";
import styled from "styled-components";
import { useState } from "react";

//Message 변수로 받기
//Error Message 변수로 받기

const Input = ({
  id,
  name,
  value,
  handleChange,
  error,
  disabled,
  children,
  onBlur,
}) => {
  return (
    <S.Input
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={children}
      error={error}
      disabled={disabled}
      onBlur={onBlur}
    />
  );
};

export default Input;

const S = {
  Input: styled.input`
    width: 100%;
    height: 50px;
    border-radius: 8px;
    padding: 12px 16px;
    border: 1px solid ${({ theme }) => theme.colors.grey[200]};
    margin: 10px 0;

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
};
