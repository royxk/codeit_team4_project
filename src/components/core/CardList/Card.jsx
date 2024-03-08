import styled from "styled-components";
import { textStyle } from "./CardText";
import RecipientListBlock from "../../core/RecipientListBlock";
import TopEmojiBlock from "../../header/emoji/TopEmojiBlock";

const Card = ({ data }) => {
  const background = data.backgroundImageURL ? "picture" : data.backgroundColor;

  const backgroundImageURL = data.backgroundImageURL;

  return (
    <S.container className={background} backgroundImageURL={backgroundImageURL}>
      <S.contents>
        <S.information>
          <S.name>To. {data.name}</S.name>
          <S.profileList>
            <RecipientListBlock data={data} />
          </S.profileList>
          <S.messageCount>{data.messageCount}명이 작성했어요!</S.messageCount>
        </S.information>
            <S.emoji>
              <TopEmojiBlock emojiData={data.topReactions} maxLength={3} />
            </S.emoji>
      </S.contents>
      <S.pattern className={background}></S.pattern>
    </S.container>
  );
};

export default Card;

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

    &.blue {
      background-color: ${({ theme }) => theme.colors.blue[200]};
    }
    &.purple {
      background-color: ${({ theme }) => theme.colors.purple[200]};
    }
    &.beige {
      background-color: ${({ theme }) => theme.colors.orange[200]};
    }
    &.green {
      background-color: ${({ theme }) => theme.colors.green[200]};
    }
    &.picture {
      background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${(props) => props.backgroundImageURL});
      color: ${({theme}) => theme.colors.white};
      border: 1px solid #0000001A;
      box-shadow: 0px 2px 12px 0px #00000014;
      background-size: cover;
      background-position: center;
    }
  `,

  contents: styled.div`
    width: 227px;
    height: 210px;
    gap: 43px;
    position: relative;
    z-index: 1;
  `,

  information: styled.div`
    width: 200px;
    height: 114px;
    gap: 12px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  name: styled.div`
    ${textStyle("base", "bold", "xl")}
    line-height: 36px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
  `,

  profileList: styled.div`
    width: 100%;
    height: 28px;
    display: flex;
    flex-direction: row;
    position: relative;
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
    ${textStyle("base", "regular", "xxxs", "sm")}
  `,

  messageCount: styled.div`
    ${textStyle("bold", "bold", "sm", "xl")}
  `,

  emoji: styled.div`
    width: 227px;
    height: 53px;
    gap: 16px;
    position: absolute;
    border-top: 1px solid #0000001F;
    top: 210px;
    transform: translateY(-100%);
    display: flex;
    align-items: end;
  `,

  pattern: styled.div`
    z-index: 0;
    &.blue {
      bottom: 95px;
      right: 0px;
      left: 120px;
      position: absolute;
      transform: translateY(2px);
      position: relative;
      text-align: left;
      width: 10em;
      height: 10em;
      background-color: rgba(157, 221, 255, 1);
      border-top-right-radius: 45%;
      transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
      &:before {
        content: "";
        position: absolute;
        background-color: inherit;
        width: 10em;
        height: 10em;
        border-top-right-radius: 30%;
        transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
          translate(0, -50%);
      }
      &:after {
        content: "";
        position: absolute;
        background-color: inherit;
        width: 10em;
        height: 10em;
        border-top-right-radius: 30%;
        transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414)
          translate(50%);
      }
    }

    &.purple {
      width: 336px;
      height: 169px;
      top: 130px;
      left: 150px;
      border-radius: 90.5px;
      position: absolute;
      background-color: rgba(220, 185, 255, 0.4);
      z-index: 0;
    }

    &.green {
      width: 336px;
      height: 169px;
      top: 130px;
      left: 150px;
      border-radius: 90.5px;
      position: absolute;
      background-color: rgba(155, 226, 130, 0.3);
      z-index: 0;
    }

    &.beige {
      width: 332px;
      height: 318px;
      top: 130px;
      left: 150px;
      border-radius: 51px;
      position: absolute;
      background-color: rgba(255, 211, 130, 1);
      z-index: 0;
    }
  `,
};
