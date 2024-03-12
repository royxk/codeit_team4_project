import React, { useEffect } from 'react';
import { useState } from 'react';
import { postRecipient } from '../apiFetcher/recipients/postRecipient';
import { getAllRecipients } from '../apiFetcher/recipients/getAllRecipients';
import { getBackgroundImages } from '../apiFetcher/backgroundImages';
import { media } from '../styles/utils/mediaQuery';
import { useNavigate } from 'react-router-dom';
import theme from '../styles/theme';
import Input2 from '../components/Input/Input2';
import styled from 'styled-components';
import ColorButton from '../components/core/ColorButton';
import ImageButton from '../components/core/ImageButton';
import NavBar from '../components/core/NavBar';
import Button from '../components/core/Button/Button';
import ToggleButton from '../components/core/Button/ToggleButton';

const PaperCreate = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    team: '4',
    name: '',
    backgroundColor: 'beige',
  });
  const [selectionType, setSelectionType] = useState('color');
  const [selectedImagge, setSelectedImage] = useState(null);
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [errorMessages, setErrorMessages] = useState({
    message: '',
    error: false,
  });

  const handleSubmit = async e => {
    e.preventDefault();
    if (formData.name === '') {
      alert('받는사람 이름을 입력해주세요');
    }

    try {
      await postRecipient(formData);
      const res = await getAllRecipients(1);
      const results = res.data.results;
      if (results.length > 0) {
        const { id, backgroundColor, backgroundImageURL } = results[0];
        navigate(`/post/${id}`, {
          state: { color: backgroundColor, img: backgroundImageURL },
        });
      } else {
        console.log('No recipients found');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessages({
        message: '받는사람 이름을 입력해주세요',
        error: true,
      });
    }
  };

  const handleInputValue = e => {
    const { value } = e.target;
    formData.name = value;
  };

  const handleBlur = e => {
    const { value } = e.target;
    if (value === '') {
      setErrorMessages({
        message: '받는사람 이름을 입력해주세요',
        error: true,
      });
    } else {
      setErrorMessages({
        message: '',
        error: false,
      });
    }
  };

  const handleColorChange = color => e => {
    e.preventDefault();
    setFormData(prevFormData => ({
      ...prevFormData,
      backgroundColor: color,
    }));
  };

  const handleImageChange = image => e => {
    e.preventDefault();
    setFormData(prevFormData => ({
      ...prevFormData,
      backgroundImageURL: image,
    }));
    setSelectedImage(image);
  };

  useEffect(() => {
    getBackgroundImages().then(res => {
      setBackgroundImages(res.data.imageUrls);
      return res.data;
    });
  }, []);

  return (
    <>
      <NavBar blockVisible={false} paddingInline="24px" />
      <S.PaperCreateContainer>
        <S.Container>
          <S.InputContainer>
            <S.BoldText>To.</S.BoldText>
            <S.InputContentWrapper>
              <Input2
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputValue}
                maxLength="10"
                error={errorMessages.error}
                placeholder="받는사람 이름을 입력해주세요"
                onBlur={handleBlur}
                errorMessage={errorMessages.message}
              />
            </S.InputContentWrapper>
          </S.InputContainer>
          <S.ButtonColorWrapper>
            <S.BoldText>배경화면을 선택해 주세요</S.BoldText>
            <S.LightText>컬러를 선택하거나 이미지를 선택해주세요</S.LightText>

            <ToggleButton
              activeOption={selectionType}
              setActiveOption={setSelectionType}
            />
          </S.ButtonColorWrapper>

          <S.ButtonContainer>
            {selectionType === 'color' && (
              <S.ColorButtonContainer>
                <ColorButton
                  onClick={handleColorChange('beige')}
                  color={theme.colors.orange[200]}
                  selected={formData.backgroundColor === 'beige'}
                />
                <ColorButton
                  onClick={handleColorChange('purple')}
                  color={theme.colors.purple[200]}
                  selected={formData.backgroundColor === 'purple'}
                />
                <ColorButton
                  onClick={handleColorChange('blue')}
                  color={theme.colors.blue[200]}
                  selected={formData.backgroundColor === 'blue'}
                />
                <ColorButton
                  onClick={handleColorChange('green')}
                  color={theme.colors.green[200]}
                  selected={formData.backgroundColor === 'green'}
                />
              </S.ColorButtonContainer>
            )}
            {selectionType === 'image' && (
              <S.ColorButtonContainer>
                {backgroundImages.map(image => {
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

  InputContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    gap: 12px;
  `,
};
