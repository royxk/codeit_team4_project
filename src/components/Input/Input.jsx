import React from "react";
import styled from "styled-components";

const Input = ({
  id,
  name,
  formData,
  handleChange,
  error,
  disabled,
  children,
}) => {
  return (
    <S.Input
      type="text"
      id={id}
      name={name}
      value={formData[name]}
      onChange={handleChange}
      placeholder={children}
      error={error}
      disabled={disabled}
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
    outline: none;
    border: 1px solid hotpink;
    border-color: ${({ theme }) => theme.colors.grey[200]};
    margin: 10px 0;

    &:focus {
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
