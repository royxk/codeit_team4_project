import React, { useEffect } from "react";
import Input from "../components/Input/Input";
import styled from "styled-components";
import ColorButton from "../components/core/ColorButton";
// import Button from "../components/core/Button/Button";
import { useState } from "react";
import theme from "../styles/theme";
import { postRecipient } from "../apiFetcher/recipients/postRecipient";
import { getAllRecipients } from "../apiFetcher/recipients/getAllRecipients";
import { getBackgroundImages } from "../apiFetcher/backgroundImages";
import ImageButton from "../components/core/ImageButton";
import { media } from "../styles/utils/mediaQuery";
import NavBar from "../components/core/NavBar";

// TODO : formData를 저장하고 submitbutton을 눌렀을때 post요청을 보내는 로직을 작성해주세요.
// TODO : data를 받아서 화면에 조회할 수 있는 버튼을 만들어서 확인 가능하게 등록된 함수가 확인 가능하게 하기.

const PaperCreate = () => {
  const [formData, setFormData] = useState({
    team: "4",
    name: "",
    backgroundColor: "beige",
  });

  const [recipients, setRecipients] = useState([]);
  const [selectionType, setSelectionType] = useState("color");
  const [backgroundImages, setBackgroundImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && value.length > 10) {
      alert("10자 이내로 입력해주세요");
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const response = getBackgroundImages().then((res) => {
      setBackgroundImages(res.data.imageUrls);
      return res.data;
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    postRecipient(formData)
      .then((res) => {})
      .catch((error) => {
        console.error("Submission error:", error);
      });
  };

  const handleGetRecipients = () => {
    const response = getAllRecipients().then((res) => {
      console.log(res);
      setRecipients(res.data.results);
      return res.data;
    });
  };

  const handleColorChange = (color) => (e) => {
    e.preventDefault();

    setFormData((prevFormData) => ({
      ...prevFormData,
      backgroundColor: color,
    }));
  };

  const handleImageChange = (image) => (e) => {
    e.preventDefault();

    setFormData((prevFormData) => ({
      ...prevFormData,
      backgroundImageURL: image,
    }));
  };

  const handleSelectColor = (e) => {
    e.preventDefault();
    setSelectionType("color");
  };

  const handleSelectImage = (e) => {
    e.preventDefault();
    setSelectionType("image");
  };

  return (
    <>
      <S.NavBarContainer>
        <NavBar />
      </S.NavBarContainer>
      <S.PaperCreateContainer>
        <S.Container>
          <S.InputContainer>
            <label>To.</label>
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
          <div>
            <button
              onClick={handleSelectColor}
              style={{
                backgroundColor: selectionType === "color" ? "white" : "gray",
              }}
            >
              Select Color
            </button>
            <button
              onClick={handleSelectImage}
              style={{
                backgroundColor: selectionType === "color" ? "gray" : "white",
              }}
            >
              Select Image
            </button>
          </div>
          <S.ButtonContainer>
            {selectionType === "color" && (
              <S.ColorButtonContainer>
                <ColorButton
                  onClick={handleColorChange("beige")}
                  color={theme.colors.orange[200]}
                  selected={formData.backgroundColor === "beige"}
                />
                <ColorButton
                  onClick={handleColorChange("purple")}
                  color={theme.colors.purple[200]}
                  selected={formData.backgroundColor === "purple"}
                />
                <ColorButton
                  onClick={handleColorChange("blue")}
                  color={theme.colors.blue[200]}
                  selected={formData.backgroundColor === "blue"}
                />
                <ColorButton
                  onClick={handleColorChange("green")}
                  color={theme.colors.green[200]}
                  selected={formData.backgroundColor === "green"}
                />
              </S.ColorButtonContainer>
            )}
            {selectionType === "image" && (
              <S.ColorButtonContainer>
                {backgroundImages.map((image) => {
                  return (
                    <ImageButton
                      key={image}
                      onClick={handleImageChange(image)}
                      url={image}
                    />
                  );
                })}
              </S.ColorButtonContainer>
            )}
          </S.ButtonContainer>

          <button onClick={handleSubmit}>데이터추가</button>
        </S.Container>
        <button onClick={handleGetRecipients}>조회하기</button>
        {recipients.map((recipient) => {
          return (
            <div key={recipient.id}>
              <p>{recipient.id}</p>
              <p>{recipient.name}</p>
              <p>{recipient.backgroundColor}</p>
              <p>{recipient.backgroundImageURL}</p>
            </div>
          );
        })}
      </S.PaperCreateContainer>
    </>
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
    margin-top: 50px;
    gap: 20px;
    padding: 0 50px;
  `,

  NavBarContainer: styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    width: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.colors.grey[200]};
    padding: 0 50px;
    display: none;
    ${media.tablet`
  display: block;
  `}
    ${media.widescreen`
  padding: 0 200px;
  `}
  `,
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    ${media.widescreen`
      width: 50%;
    `}
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
  ButtonContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    ${media.tablet`
      align-items: start;
    `}
  `,
  ColorButtonContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 50px;
    margin-bottom: 50px;
    ${media.tablet`
      grid-template-columns: repeat(4, 1fr);
    `}
  `,
};
