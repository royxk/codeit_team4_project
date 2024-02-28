import { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import RollingPaper from '../components/core/RollingPaper';
import { media } from '../styles/utils/mediaQuery';
import Modal from '../components/modal/Modal';

function Papers() {
  const [isModal, setIsModal] = useState(false);
  const handlePaperCardClick = () => {
    setIsModal(true);
  };
  useEffect(() => {
    setIsModal(false);
  }, []);
  return (
    <>
      {isModal && <Modal onClose={() => setIsModal(false)} />}
      <S.Container>
        <S.PaperList>
          <div onClick={handlePaperCardClick}>
            <RollingPaper />
          </div>
          <div onClick={handlePaperCardClick}>
            <RollingPaper />
          </div>
          <div onClick={handlePaperCardClick}>
            <RollingPaper />
          </div>
          <div onClick={handlePaperCardClick}>
            <RollingPaper />
          </div>
          <div onClick={handlePaperCardClick}>
            <RollingPaper />
          </div>
          <div onClick={handlePaperCardClick}>
            <RollingPaper />
          </div>
        </S.PaperList>
      </S.Container>
    </>
  );
}

export default Papers;

const S = {
  Container: styled.div`
    background-color: ${theme.colors.orange[200]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    min-height: 100vh;
    max-height: 100%;
    min-width: 360px;
  `,
  PaperList: styled.div`
    width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(1, minmax(auto, 320px));
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 16px;
    ${media.tablet`
    grid-template-columns: repeat(2, minmax(auto, 350px));
    `}
    ${media.desktop`
    grid-template-columns: repeat(3, minmax(auto, 380px));
    `}
  `,
};
