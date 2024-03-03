import { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import { getRecipientMessages } from '../apiFetcher/recipients/getRecipientMessages';
import { getRecipient } from '../apiFetcher/recipients/getAllRecipients';
import RollingPaper from '../components/core/RollingPaper';
import EmptyPaper from '../components/core/EmptyPaper';
import { media } from '../styles/utils/mediaQuery';
import Modal from '../components/modal/Modal';
import SmallButton from '../components/core/Button/SmallButton';
import NavBar from '../components/core/NavBar';
import NavOptionalBar from '../components/header/NavOptionalBar';
import Toast from '../components/core/Toast';

const MODAL_INIT = {
  open: false,
  data: {},
};
// TODO: 롤링페이퍼 클릭하고 back color넘겨주면 받아서 적용
// TODO: 4팀 데이터 추가가능해지면 삭제기능 만들기
// TODO: 무한스크롤
function Papers() {
  const [ModalInfo, setModalInfo] = useState(MODAL_INIT);
  const [paperList, setPaperList] = useState([]);
  const [recipientInfo, setRecipientInfo] = useState(null);
  const [isToast, setIsToast] = useState(false);
  const { id } = useParams();
  const location = useLocation();

  const editPermission = location.pathname.includes('/edit');

  const handlePaperCardClick = (data) => {
    setModalInfo({
      open: true,
      data: data,
    });
  };

  const handleUrlCopyClick = () => {
    setIsToast(true);
    navigator.clipboard.writeText(`${window.location.origin}${location.pathname}`);
    setTimeout(() => {
      setIsToast(false);
    }, 5000);
  };

  const handleGetPaperData = useCallback(async () => {
    const response = await getRecipientMessages(id, 6);
    const { next, count, results } = response.data;
    setPaperList(results);
  }, [id]);

  const handleGetRecipientData = useCallback(async () => {
    const response = await getRecipient(id);
    setRecipientInfo(response.data);
  }, [id]);

  useEffect(() => {
    handleGetPaperData();
    handleGetRecipientData();
    setModalInfo(false);
  }, [handleGetPaperData, handleGetRecipientData]);
  return (
    <>
      {ModalInfo.open && <Modal cardData={ModalInfo.data} onClose={() => setModalInfo(false)} />}
      <S.HeaderBox>
        <NavBar />
        {recipientInfo && <NavOptionalBar data={recipientInfo} onToast={handleUrlCopyClick} />}
      </S.HeaderBox>
      <S.Container>
        <S.PaperList>
          {editPermission && (
            <S.DeleteBtn>
              <SmallButton text="삭제하기" />
            </S.DeleteBtn>
          )}
          {editPermission || (
            <div>
              <EmptyPaper />
            </div>
          )}
          {paperList &&
            paperList.map((data) => {
              return (
                <div key={data.id} onClick={() => handlePaperCardClick(data)}>
                  <RollingPaper cardData={data} editPermission={editPermission} />
                </div>
              );
            })}
        </S.PaperList>
      </S.Container>
      {isToast && (
        <S.ToastBox>
          <Toast onClose={() => setIsToast(false)} />
        </S.ToastBox>
      )}
    </>
  );
}

export default Papers;

const S = {
  Container: styled.div`
    background-color: ${theme.colors.orange[200]};
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    padding: 80px 24px;
    min-height: 100vh;
    max-height: 100%;
    min-width: 360px;
  `,
  PaperList: styled.div`
    position: relative;
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
  DeleteBtn: styled.div`
    position: fixed;
    bottom: 2%;
    left: 0;
    right: 0;
    width: 320px;
    margin: 0 auto;
    ${media.tablet`
      width: 720px
    `}
    ${media.desktop`
      position: absolute;
      inset: initial;
      top: -10%;
      right: 0;
      margin: initial;
      width: initial;
    `}
  `,
  HeaderBox: styled.div`
    /* width: 1200px; */
    padding-inline: 24px;
    margin: 0 auto;
    background-color: ${theme.colors.white};
    position: sticky;
    top: 0;
    z-index: 10;
  `,
  ToastBox: styled.div`
    position: fixed;
    bottom: 32px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 320px;
    ${media.tablet`
      width: 720px
    `}
  `,
};
