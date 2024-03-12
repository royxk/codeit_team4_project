import { useState } from 'react';
import styled from 'styled-components';
import enabled from '../../../assets/images/EnabledButtonImg.svg';
import hover from '../../../assets/images/HoverButtonImg.svg';
import disabled from '../../../assets/images/DisabledButtonImg.svg';
import pressed from '../../../assets/images/PressedButtonImg.svg';
import focus from '../../../assets/images/FocusButtonImg.svg';

const CircleButton = () => {
  const [buttonState, setButtonState] = useState(enabled);

  const handleButtonClick = () => {
    setButtonState(pressed);
  };

  const handleMouseEnter = () => {
    setButtonState(hover);
  };

  const handleMouseLeave = () => {
    setButtonState(enabled);
  };
  const handleFocus = () => {
    setButtonState(focus);
  };

  const handleBlur = () => {
    setButtonState(enabled);
  };

  return (
    <div>
      <ImageButton
        onClick={handleButtonClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={buttonState === disabled}
      >
        <img src={buttonState} alt="buttonImg"></img>
      </ImageButton>
    </div>
  );
};

const ImageButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export default CircleButton;
