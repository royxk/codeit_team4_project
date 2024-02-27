import styled from 'styled-components';
import completed from '../../assets/images/completed.svg';
import close from '../../assets/images/close.svg';

function Toast() {
  return (
    <S.Wrap>
      <S.FlexBox>
        <S.InnerFlexBox>
          <img src={completed} alt="completed" />
          <span>URL이 복사 되었습니다.</span>
        </S.InnerFlexBox>
        <img src={close} alt="close" />
      </S.FlexBox>
    </S.Wrap>
  );
}

export default Toast;

const S = {
  Wrap: styled.div`
    position: absolute;
    width: inherit;
    background: #000000cc;
    border-radius: 8px;
    padding: 24px;
  `,

  FlexBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  InnerFlexBox: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    
    span{
      font-family: ${({ theme }) => theme.fontFamily.base};
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fontSizes.sm};
      line-height: ${({ theme }) => theme.lineHeights.xl};;
    }
  `,
};
