import React, { useEffect } from "react";
import Input from "../components/Input/Input";
import styled from "styled-components";
import ColorButton from "../components/core/ColorButton";
import { useState } from "react";
import theme from "../styles/theme";
import { postRecipient } from "../apiFetcher/recipients/postRecipient";
import { getAllRecipients } from "../apiFetcher/recipients/getAllRecipients";
import { getBackgroundImages } from "../apiFetcher/backgroundImages";
import ImageButton from "../components/core/ImageButton";
import { media } from "../styles/utils/mediaQuery";
import NavBar from "../components/core/NavBar";
import { useNavigate } from "react-router-dom";
import Button from "../components/core/Button/Button";

const PaperCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    team: "4",
    name: "",
    backgroundColor: "beige",
  });
  const [selectionType, setSelectionType] = useState("color");
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [selectedImagge, setSelectedImage] = useState(null);

  const onClick = (link) => {
    navigate(`/${link}`);
  };
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postRecipient(formData);
      const res = await getAllRecipients(1);
      const results = res.data.results;
      if (results.length > 0) {
        const { id, backgroundColor, backgroundImageURL } = results[0];
        console.log(id);
        navigate(`/post/${id}`, {
          state: { color: backgroundColor, img: backgroundImageURL },
        });
      } else {
        console.log("No recipients found");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
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
    setSelectedImage(image);
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
        <NavBar onClick={() => onClick("")} />
      </S.NavBarContainer>
      <S.PaperCreateContainer>
        <S.Container>
          <S.InputContainer>
            <S.BoldText>To.</S.BoldText>
            <Input
              id="name"
              name="name"
              formData={formData}
              handleChange={handleChange}
            >
              받는사람 이름을 입력해주세요
            </Input>
          </S.InputContainer>
          <S.ButtonColorWrapper>
            <S.BoldText>배경화면을 선택해 주세요</S.BoldText>
            <S.LightText> 컬러를 선택하거나 이미지를 선택해주세요</S.LightText>
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
          </S.ButtonColorWrapper>

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
                      isSelected={selectedImagge === image}
                    />
                  );
                })}
              </S.ColorButtonContainer>
            )}
          </S.ButtonContainer>
          <Button variant="primary" size={40} onClick={handleSubmit}>
            생성하기
          </Button>
        </S.Container>
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
    margin-top: 70px;
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
  ButtonColorWrapper: styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 100%;
  `,
  BoldText: styled.div`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  `,
  LightText: styled.div`
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.grey[400]};
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
