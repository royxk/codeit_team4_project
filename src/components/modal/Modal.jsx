import { useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "../core/Button/Button";
import ModalPortal from "./ModalPortal";
import theme from "../../styles/theme";
import { media } from "../../styles/utils/mediaQuery";
import RelationBadge from "../core/RelationBadge";
import useOutSideClick from "../../hooks/useOutSideClick";

const CARD_DATA_INIT = {
  id: 0,
  recipientId: 0,
  sender: "테스트",
  profileImageURL:
    "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
  relationship: "지인",
  content: "테스트입니다",
  font: "Pretendard",
  createdAt: "2023-11-01T08:05:25.399056Z",
};

// eslint-disable-next-line react/prop-types
function Modal({ cardData = CARD_DATA_INIT, onClose }) {
  const modalRef = useRef();
  const handleCloseClick = () => {
    onClose();
  };

  useOutSideClick(modalRef, handleCloseClick);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = "auto";
    };
  }, []);
  return (
    <ModalPortal>
      <S.BackDrop>
        <S.ModalWrap ref={modalRef}>
          <S.ModalContainer>
            <S.ModalHeader>
              <S.FlexBox>
                <S.ProfileImg>
                  <img src={cardData?.profileImageURL} alt="profile" />
                </S.ProfileImg>
                <S.FlexColum>
                  <S.Sender>
                    From. <span>{cardData?.sender}</span>
                  </S.Sender>
                  <div>
                    <RelationBadge relationship={cardData?.relationship} />
                  </div>
                </S.FlexColum>
              </S.FlexBox>
              <S.CreateAt>{cardData?.createdAt.substring(0, 10)}</S.CreateAt>
            </S.ModalHeader>
            <S.ModalContent>{cardData?.content}</S.ModalContent>
            <S.ModalButton onClick={handleCloseClick}>
              <Button variant={"primary"} size={40} text="확인" />
            </S.ModalButton>
          </S.ModalContainer>
        </S.ModalWrap>
      </S.BackDrop>
    </ModalPortal>
  );
}

export default Modal;

const S = {
  BackDrop: styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: #00000099;
    z-index: 998;
  `,
  ModalWrap: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 999;
  `,
  ModalContainer: styled.div`
    background-color: ${theme.colors.white};
    box-shadow: 0px 2px 12px 0px #00000014;
    border-radius: 16px;
    padding: 40px;
    width: 360px;
    ${media.tablet`
      width: 600px
    `}
  `,
  ModalHeader: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.grey[200]};
    padding-bottom: 16px;
    margin-bottom: 16px;
  `,
  ModalContent: styled.div`
    width: 100%;
    height: 250px;
    word-wrap: break-word;
    overflow-y: auto;
    font-size: ${theme.fontSizes.base};
    line-height: ${theme.lineHeights.xxl};
  `,
  ModalButton: styled.div`
    margin: 15px auto 0 auto;
    width: 120px;
  `,
  Sender: styled.span`
    font-size: ${theme.fontSizes.lg};
    line-height: ${theme.lineHeights.lg};
    span {
      font-weight: ${theme.fontWeights.bold};
      font-family: ${(cardData) => cardData.font};
    }
  `,
  CreateAt: styled.div`
    font-size: ${theme.fontSizes.xxs};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.lineHeights.base};
    color: ${theme.colors.grey[400]};
  `,
  ProfileImg: styled.div`
    width: 56px;
    height: 56px;
    border-radius: 100px;
    overflow: hidden;
    border: 1px solid ${theme.colors.grey[200]};
    img {
      width: 100%;
      object-fit: cover;
    }
  `,
  FlexBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  `,
  FlexColum: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 6px;
  `,
};
