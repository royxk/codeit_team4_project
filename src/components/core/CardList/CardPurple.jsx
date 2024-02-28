import styled from "styled-components";

const CardPurple = (props) => {
  return (
    <S.container>
      <S.contents>
        <S.information>
          <S.name>To. {props.name}</S.name>
          <S.profileList>
            <S.profileFirst></S.profileFirst>
            <S.profileSecond></S.profileSecond>
            <S.profileThird></S.profileThird>
            <S.profileCountBox>
              <S.profileCount>+27</S.profileCount>
            </S.profileCountBox>
          </S.profileList>
          <S.messageCount>{props.messageCount}명이 작성했어요!</S.messageCount>
        </S.information>
        <S.emoji>이모지</S.emoji>
      </S.contents>
      <S.pattern></S.pattern>
    </S.container>
  );
};

export default CardPurple;

const S = {
  container: styled.div`
    width: 275px;
    height: 260px;
    border-radius: 16px;
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.1);
    padding: 30px 24px;
    position: relative;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.purple[200]};
  `,

  contents: styled.div`
    width: 227px;
    height: 210px;
    gap: 43px;
    position: relative;
    z-index: 1;
  `,

  information: styled.div`
    width: 125px;
    height: 114px;
    gap: 12px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  name: styled.div`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font: ${({ theme }) => theme.fontFamily.bold};
  `,

  profileList: styled.div`
    width: 100%;
    height: 28px;
    display: flex;
    flex-direction: row;
    position: relative;
  `,

  profileFirst: styled.div`
    width: 28px;
    height: 28px;
    border-radius: 9999px;
    border: 1.5px solid;
    border-color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
  `,

  profileSecond: styled.div`
    width: 28px;
    height: 28px;
    border-radius: 50px;
    border: 1.5px solid;
    border-color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    left: 15px;
  `,

  profileThird: styled.div`
    width: 28px;
    height: 28px;
    border-radius: 50px;
    border: 1.5px solid;
    border-color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    left: 30px;
  `,

  profileCountBox: styled.div`
    width: 33px;
    height: 28px;
    border-radius: 30px;
    padding: 5px 6px;
    gap: 10px;
    border-color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    left: 45px;
  `,

  profileCount: styled.div`
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font: ${({ theme }) => theme.fontFamily.base};
    font-size: ${({ theme }) => theme.fontSizes.xxxs};
    line-height: ${({ theme }) => theme.lineHeights.sm};
  `,

  messageCount: styled.div`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font: ${({ theme }) => theme.fontFamily.base};
  `,

  emoji: styled.div`
    width: 227px;
    height: 53px;
    gap: 16px;
    position: absolute;
    top: 210px;
    transform: translateY(-100%);
  `,

  pattern: styled.div`
    width: 336px;
    height: 169px;
    top: 130px;
    left: 150px;
    border-radius: 90.5px;
    position: absolute;
    background-color: rgba(220, 185, 255, 0.4);
    z-index: 0;
  `,
};
