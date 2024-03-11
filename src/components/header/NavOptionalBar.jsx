import styled from "styled-components";
import RecipientListBlock from "../core/RecipientListBlock.jsx";
import ReactionBadge from "../core/ReactionBadge.jsx";
import {media} from "../../styles/utils/mediaQuery.ts";
import arrowDown from "../../assets/images/arrowDown.svg";
import smileEmoji from "../../assets/images/Smile.svg";
import shareEmoji from "../../assets/images/share.svg";
import EmojiPicker from "emoji-picker-react";
import {useEffect, useRef, useState} from "react";
import {postRecipientReaction} from "../../apiFetcher/recipients/postRecipientReaction.js";
import {getRecipientReaction} from "../../apiFetcher/recipients/getRecipientReactions.js";
import {isEqual} from "lodash";
import theme from "../../styles/theme.js";
import TopEmojiBlock from "./emoji/TopEmojiBlock.jsx";
import {handleShareKakao} from "../../apiFetcher/kakao/shareKakao.js";

function NavOptionalBar({data, onToast, inlinePadding}) {
    const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

    let innerMessageCount = data.messageCount > 99 ?
        "99+명이 작성했어요 !" : `${data.messageCount}명이 작성했어요 !`;

    const modalOpenButton = (modalIndex) => {
        if(viewModal === modalIndex) {
            setViewModal(-1);
        }
        else {
            setViewModal(modalIndex);
        }
    }

    const DESKTOP_WIDTH = theme.breakpoints.desktop;
    const emojiStorage = new Set();
    const initialData = {};
    const [viewModal, setViewModal] = useState(-1);
    const [isLoading, setIsLoading] = useState(false);
    const [emojiData, setEmojiData] = useState(initialData);
    const [emojiListChange, setEmojiListChange] = useState(window.innerWidth >= DESKTOP_WIDTH)
    const whetherClick = useRef(emojiStorage);
    const lastWidth = useRef(window.innerWidth);

    useEffect(() => {
        const getEmojiData = async () => {
            const response = await getRecipientReaction(data.id, 11, 0);
            const newData = response.data.results;
            setEmojiData(newData);
        }

        getEmojiData();
    }, []);

    useEffect(() => {
        if(!window.Kakao.isInitialized()) {
            window.Kakao.init(KAKAO_API_KEY);
            console.log(window.Kakao);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if(emojiListChange && (window.innerWidth < DESKTOP_WIDTH)) {
                setEmojiListChange(false);
                console.log('데스크탑 사이즈 미만 변경');
            } else if(!emojiListChange && (window.innerWidth >= DESKTOP_WIDTH)) {
                setEmojiListChange(true);
                console.log('데스크탑 사이즈 이상 변경');
            }
            lastWidth.current = window.innerWidth;
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [emojiListChange]);

    if(emojiData === initialData) {
        return <></>
    }
    return(
        <S.EntireWrapper>
            <S.UserBox inlinePadding={inlinePadding}>
                {`To. ${data.name}`}
            </S.UserBox>
            <S.EntireOptionWrapper inlinePadding={inlinePadding}>
                <S.RecipientListBlockWrapper>
                    <RecipientListBlock data = {data}/>
                    <S.RecipientCounter>{innerMessageCount}</S.RecipientCounter>
                </S.RecipientListBlockWrapper>
                <VerticalRule/>
                <S.OptionWrapper>
                    <S.ViewEmojiWrapper>
                        <TopEmojiBlock emojiData = {emojiData} maxLength = "3"/>
                        <S.EmojiOpenButton onClick={() => modalOpenButton(1)}>
                            {
                                viewModal === 1 ?
                                    <S.EmojiListModal>
                                        <S.EmojiListModalInnerWrapper>
                                            {
                                                emojiListChange ?
                                                    new Array(Math.min(4, Math.max(Object.keys(emojiData).length - 3, 0))).fill(0).map((x, index) => {
                                                        let emoji = emojiData[index + 3].emoji;
                                                        let count = emojiData[index + 3].count;
                                                        return <ReactionBadge key={index} emoji={emoji} count={count} />
                                                    })
                                                    : new Array(Math.min(3, Math.max(Object.keys(emojiData).length - 3, 0))).fill(0).map((x, index) => {
                                                        let emoji = emojiData[index + 2].emoji;
                                                        let count = emojiData[index + 2].count;
                                                        return <ReactionBadge key={index} emoji={emoji} count={count} />
                                                    })
                                            }
                                        </S.EmojiListModalInnerWrapper>
                                        <S.EmojiListModalInnerWrapper>
                                            {
                                                emojiListChange ?
                                                    new Array(Math.min(4, Math.max(Object.keys(emojiData).length - 7, 0))).fill(0).map((x, index) => {
                                                        let emoji = emojiData[index + 7].emoji;
                                                        let count = emojiData[index + 7].count;
                                                        return <ReactionBadge key={index} emoji={emoji} count={count} />
                                                    })
                                                    : new Array(Math.min(3, Math.max(Object.keys(emojiData).length - 6, 0))).fill(0).map((x, index) => {
                                                        let emoji = emojiData[index + 6].emoji;
                                                        let count = emojiData[index + 6].count;
                                                        return <ReactionBadge key={index} emoji={emoji} count={count} />
                                                    })
                                            }
                                        </S.EmojiListModalInnerWrapper>
                                    </S.EmojiListModal> : null
                            }
                        </S.EmojiOpenButton>
                    </S.ViewEmojiWrapper>
                    <S.ControllerWrapper>
                        <S.EmojiButton imageURL={smileEmoji} onClick={() => modalOpenButton(2)}>
                            <S.EmojiPickerContainer>
                                {
                                    viewModal === 2 ? <EmojiPicker
                                        skinTonesDisabled={true}
                                        searchDisabled={true}
                                        emojiStyle='native'
                                        onEmojiClick={async (emojiClickData) => {
                                            try {
                                                setIsLoading(true);
                                                let emoji = emojiClickData.emoji;
                                                console.log(emojiData);

                                                if(whetherClick.current.has(emoji)) {
                                                    await postRecipientReaction({
                                                        "emoji": emoji,
                                                        "type": "decrease"
                                                    }, data.id);
                                                    whetherClick.current.delete(emoji);
                                                }
                                                else {
                                                    await postRecipientReaction({
                                                        "emoji": emoji,
                                                        "type": "increase"
                                                    }, data.id);
                                                    whetherClick.current.add(emoji);
                                                }

                                                const response = await getRecipientReaction(data.id, 11, 0);
                                                const newData = response.data.results;

                                                if(!isEqual(newData, emojiData)) {
                                                    setEmojiData(newData);
                                                }

                                            } catch (error) {
                                                console.error("데이터를 불러올 수 없습니다.");
                                                console.log(error);
                                            } finally {
                                                setIsLoading(false);
                                            }
                                        }}
                                    /> : null
                                }
                            </S.EmojiPickerContainer>
                        </S.EmojiButton>
                        <VerticalRule />
                        <S.EmojiButton imageURL = {shareEmoji} onClick={() => modalOpenButton(3)}>
                            {
                                viewModal === 3 ? <S.ShareModal
                                >
                                    <S.InnerShare onClick={() => handleShareKakao(data)}>카카오톡 공유</S.InnerShare>
                                    <S.InnerShare onClick={() => {
                                        console.log(onToast);
                                        onToast();
                                    }}>URL 공유</S.InnerShare>
                                </S.ShareModal>: null
                            }
                        </S.EmojiButton>
                    </S.ControllerWrapper>
                </S.OptionWrapper>
            </S.EntireOptionWrapper>

        </S.EntireWrapper>
    )
}

export default NavOptionalBar;

const VerticalRule = styled.div`
      width: 1px;
      height: 28px;
      background-color: ${({theme}) => theme.colors.grey["200"]};
    `

const S= {
    EntireWrapper:styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: fit-content;
      background-color: ${({theme}) => theme.colors.white};
      border-bottom: 1px solid ${({theme}) => theme.colors.grey["300"]};
      
      ${media.tablet`
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
          width: 100%;
          height: 68px;
      `}
    `,

    UserBox:styled.div`
      width: 100%;
      height: fit-content;
      line-height: 42px;
      white-space: nowrap;
      padding: 5px;

      padding-inline: ${(props) => props.inlinePadding};
      font-family: ${({theme}) => theme.fontFamily.bold};
      font-size: ${({theme}) => theme.fontSizes.xxl};
      color: ${({theme}) => theme.colors.grey["800"]};
      border-bottom: 1px solid ${({theme}) => theme.colors.grey["300"]};
      
      ${media.tablet`
          width: 227px;
          border: none;
      `}

      ${media.widescreen`
          width: 227px;
          border: none;
          padding-inline: 200px;
      `}
    `,

    EntireOptionWrapper:styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: fit-content;
      gap: 28px;
      padding: 10px;
      padding-inline: ${(props) => props.inlinePadding};

      > ${VerticalRule} {
        display: none;
        ${media.desktop`
            display: block;
        `}
      }
      
      ${media.tablet`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: fit-content;
          height: 36px;
          gap: 28px;
          
          > ${VerticalRule} {
            display: none;
            ${media.desktop`
                display: block;
            `}
          }
      `}

      ${media.widescreen`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: fit-content;
          height: 36px;
          gap: 28px;
          padding-inline: 200px;
          
          > ${VerticalRule} {
            display: none;
            ${media.desktop`
                display: block;
            `}
          }
      `}
      
    `,

    RecipientListBlockWrapper:styled.div`
      display: none;
      
      ${media.desktop` 
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: fit-content;
          height: 28px;
          gap: 11px;
      `}
    `,

    RecipientCounter:styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      height: 27px;
      white-space: nowrap;
      
      font-family: ${({theme}) => theme.fontFamily.base};
      font-size: ${({theme}) => theme.fontSizes.sm};
      font-weight: ${({theme}) => theme.fontWeights.regular};
      line-height: 27px;
      color: ${({theme}) => theme.colors.grey["900"]};
      
    `,

    OptionWrapper:styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: fit-content;
      height: 36px;
      gap: 8px;
      `,

    ViewEmojiWrapper:styled.div`
      display: flex;
      position: relative;
      justify-content: space-between;
      align-items: center;
      width: fit-content;
      height: 36px;
      gap: 2px;
    `,

    EmojiWrapper:styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: fit-content;
      height: 36px;
      gap: 8px;
    `,

    ControllerWrapper:styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: fit-content;
      height: 36px;
      gap: 13px;
    `,

    EmojiOpenButton:styled.div`
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      width: 36px;
      height: 36px;
      border: 0;
      background-image: url(${arrowDown});
      background-size: initial;
      background-repeat: no-repeat;
      background-position: center;
    `,

    EmojiPickerContainer:styled.div`
      display: flex;
      position: absolute;
      left: 50%;
      transform: translateX(-95%) translateY(5%);
      z-index: 7;
    `,

    EmojiListModal:styled.div`
      display: flex;
      position: absolute;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 248px;
      height: 134px;
      border: 1px solid ${({theme}) => theme.colors.grey["300"]};
      border-radius: 8px; 
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
      padding: 16px;
      gap: 10px;
      overflow: hidden;
      z-index: 7;
      background-color: ${({theme}) => theme.colors.white};
      
      left: 50%;
      transform: translateX(-95%) translateY(70%);
      
      ${media.desktop`
        width: 312px;
        height: 134px;
      `}
    `,

    EmojiListModalInnerWrapper:styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: fit-content;
      height: 38px;
      gap: 8px;
      overflow: hidden;
      
      ${media.desktop`
        width: fit-content;
        height: 38px;
      `}
    `,

    EmojiButton:styled.div`
      display: flex;
      position: relative;
      width: 36px;
      height: 32px;
      border: 1px solid rgba(204, 204, 204, 1);
      border-radius: 6px;
      padding: 6px 8px;
      gap: 10px;
      background-color: rgba(255, 255, 255, 1);
      background-image: url(${(props) => props.imageURL});
      background-size: initial;
      background-repeat: no-repeat;
      background-position: center;
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      color: rgba(24, 24, 24, 1);

      &:hover {
        background-color: rgba(246, 246, 246, 1);
      }

      &:active {
        background-color: rgba(246, 246, 246, 1);
        border-color: rgba(204, 204, 204, 1);

        &:focus {
          background-color: rgba(255, 255, 255, 1);
          border-color: rgba(85, 85, 85, 1);
        }

        &:disabled {
          background-color: rgba(204, 204, 204, 1);
          border-color: rgba(204, 204, 204, 1);
          color: rgba(255, 255, 255, 1);
          cursor: not-allowed;
        }  
      }
    `,

    ShareModal:styled.div`
      display: flex;
      position: absolute;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      width: 140px;
      height: 120px;
      padding: 10px 1px;
      border: 1px solid ${({theme}) => theme.colors.grey["300"]};
      border-radius: 8px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
      z-index: 7;
      background-color: ${({theme}) => theme.colors.white};

      left: 50%;
      transform: translateX(-95%) translateY(30%);
    `,

    InnerShare:styled.div`
      display: flex;
      justify-content: normal;
      align-items: center;
      width: 138px;
      height: 50px;
      padding: 12px 16px;
      gap: 10px;

      line-height: 26px;
      font-family: ${({theme}) => theme.fontFamily.base};
      font-size: ${({theme}) => theme.fontSizes.sm};
      font-weight: ${({theme}) => theme.fontWeights.regular};
      

      &:hover {
        background-color: rgba(246, 246, 246, 1);
      }

      &:active {
        background-color: rgba(246, 246, 246, 1);
        border-color: rgba(204, 204, 204, 1);

        &:focus {
          background-color: rgba(255, 255, 255, 1);
          border-color: rgba(85, 85, 85, 1);
        }

        &:disabled {
          background-color: rgba(204, 204, 204, 1);
          border-color: rgba(204, 204, 204, 1);
          color: rgba(255, 255, 255, 1);
          cursor: not-allowed;
        }
    `
}