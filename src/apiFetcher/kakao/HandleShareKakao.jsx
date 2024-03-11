import {useEffect} from "react";
import styled from "styled-components";


export function HandleShareKakao({data}) {
    const KAKAO_JS_KEY = import.meta.env.VITE_KAKAO_JS_KEY;

    useEffect(() => {
        Kakao.cleanup();

        if(!window.Kakao.isInitialized()) {
            window.Kakao.init(KAKAO_JS_KEY);
            console.log(window.Kakao);
        }
    }, []);

    const shareKakao = () => {
        Kakao.Share.sendDefault({
            objectType: "feed",
            content: {
                title: `${data.name}님의 롤링 페이퍼`,
                description: '',
                imageUrl: data.backgroundImageURL || '',
                link: {
                    webUrl: `http://localhost:5173/post/${data.id}`
                },
            },
            social: {
                likeCount: data.reactionCount,
                commentCount: data.messageCount,
                sharedCount: 0,
            },
            buttons: []
        })
    }

    return <S.InnerShare onClick={() => shareKakao(data)}>카카오톡 공유</S.InnerShare>
}

const S = {
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