import React from "react";
import Input from "../components/Input/Input";
import styled from "styled-components";
import ColorButton from "../components/core/ColorButton";
import Button from "../components/core/Button/Button";
import { useState } from "react";

const PaperCreate = () => {
  const [formData, setFormData] = useState({
    team: "4",
    name: "",
    backgroundColor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  return (
    <S.PaperCreateContainer>
      <form action="">
        <S.InputContainer>
          <label htmlFor="">To.</label>
          <Input
            id="name"
            name="name"
            formData={formData}
            handleChange={handleChange}
          >
            받는사람 이름을 입력해주세요
          </Input>
        </S.InputContainer>
        <div>
          <p>배경화면을 선택해 주세요</p>
          <p> 컬러를 선택하거나 이미지를 선택해주세요</p>
        </div>
        <S.ColorButtonContainer>
          <ColorButton color={({ theme }) => theme.colors.orange[200]} />
          <ColorButton color={({ theme }) => theme.colors.purple[200]} />
          <ColorButton color={({ theme }) => theme.colors.blue[200]} />
          <ColorButton color={({ theme }) => theme.colors.green[200]} />
        </S.ColorButtonContainer>
        {/* <Button>등록</Button> */}
      </form>
    </S.PaperCreateContainer>
  );
};

export default PaperCreate;

const S = {
  PaperCreateContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 50px;
  `,
  InputContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 10px;
    margin-bottom: 50px;
  `,
  ColorButtonContainer: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 50px;
    margin-bottom: 50px;
  `,
};
