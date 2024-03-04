import styled from 'styled-components';
import theme from '../../styles/theme';
import { media } from '../../styles/utils/mediaQuery';
import CircleButton from '../core/Button/CircleButton';

function EmptyPaper() {
  return (
    <S.CardContainer>
      <S.CircleBtn>
        <CircleButton />
      </S.CircleBtn>
    </S.CardContainer>
  );
}

export default EmptyPaper;

const S = {
  CardContainer: styled.div`
    position: relative;
    background-color: ${theme.colors.white};
    box-shadow: 0px 2px 12px 0px #00000014;
    border-radius: 16px;
    padding: 25px;
    width: 100%;
    height: 230px;
    ${media.tablet`
    height: 280px
  `}
  `,
  CircleBtn: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  `,
};
