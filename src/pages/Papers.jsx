import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import { getRecipientMessages } from '../apiFetcher/recipients/getRecipientMessages';
import { getRecipient } from '../apiFetcher/recipients/getAllRecipients';
import { deleteRecipient } from '../apiFetcher/recipients/deleteRecipient';
import { deleteMessage } from '../apiFetcher/messages/deleteMessage';
import RollingPaper from '../components/core/RollingPaper';
import EmptyPaper from '../components/core/EmptyPaper';
import { media } from '../styles/utils/mediaQuery';
import Modal from '../components/modal/Modal';
import Button from '../components/core/Button/Button';
import NavBar from '../components/core/NavBar';
import NavOptionalBar from '../components/header/NavOptionalBar';
import Toast from '../components/core/Toast';
import FetchMore from '../components/core/FetchMore';

const MODAL_INIT = {
  open: false,
  data: {},
};

// TODO: 4팀 데이터 추가가능해지면 삭제기능 만들기
function Papers() {
  const [ModalInfo, setModalInfo] = useState(MODAL_INIT);
  const [paperList, setPaperList] = useState([]);
  const [recipientInfo, setRecipientInfo] = useState(null);
  const [isToast, setIsToast] = useState(false);
  const [paperOffset, setPaperOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const editPermission = location.pathname.includes('/edit');
  const navigate = useNavigate();
  const endData = useRef(false);

  if (recipientInfo) {
    switch (recipientInfo.backgroundColor) {
      case 'beige':
        recipientInfo.backgroundColor = theme.colors.orange[200];
        break;
      case 'purple':
        recipientInfo.backgroundColor = theme.colors.purple[200];
        break;
      case 'blue':
        recipientInfo.backgroundColor = theme.colors.blue[200];
        break;
      case 'green':
        recipientInfo.backgroundColor = theme.colors.green[200];
        break;
      default:
        break;
    }
  }
  const handlePaperCardClick = data => {
    setModalInfo({
      open: true,
      data: data,
    });
  };

  const handleUrlCopyClick = () => {
    setIsToast(true);
    navigator.clipboard.writeText(
      `${window.location.origin}${location.pathname}`,
    );
    setTimeout(() => {
      setIsToast(false);
    }, 5000);
  };

  const handleDeletePaper = async msgId => {
    await deleteMessage(msgId);
    alert('메세지가 삭제되었습니다');
    setPaperList(prev => prev.filter(value => value.id !== msgId));
  };

  const handleDeleteRecipient = async () => {
    await deleteRecipient(id);
    alert('롤링페이퍼가 삭제되었습니다');
    navigate('/list', { replace: true });
  };

  const handleGetPaperData = useCallback(async () => {
    setIsLoading(true);
    const response = await getRecipientMessages(id, 7, paperOffset);
    const { results } = response.data;
    setIsLoading(false);
    if (results.length === 0) {
      endData.current = true;
    }
    setPaperList(prevData => [...prevData, ...results]);
  }, [id, paperOffset]);

  const handleGetRecipientData = useCallback(async () => {
    const response = await getRecipient(id);
    setRecipientInfo(response.data);
  }, [id]);

  useEffect(() => {
    if (!endData.current) {
      handleGetPaperData();
    }
    handleGetRecipientData();
    setModalInfo(false);
  }, [handleGetPaperData, handleGetRecipientData]);
  return (
    <>
      {ModalInfo.open && (
        <Modal cardData={ModalInfo.data} onClose={() => setModalInfo(false)} />
      )}
      <S.Container background={recipientInfo}>
        <S.HeaderBox>
          <NavBar buttonVisible={false} paddingInline="24px" />
          {recipientInfo && (
            <NavOptionalBar
              data={recipientInfo}
              onToast={handleUrlCopyClick}
              inlinePadding="24px"
            />
          )}
        </S.HeaderBox>
        <S.ContentWrap>
          {editPermission && (
            <S.DeleteBtn onClick={handleDeleteRecipient}>
              <Button variant={'primary'} size={40}>
                삭제하기
              </Button>
            </S.DeleteBtn>
          )}
          <S.PaperListWrap>
            <S.PaperList>
              {editPermission || (
                <Link to={`/post/${id}/message`}>
                  <EmptyPaper />
                </Link>
              )}
              {paperList &&
                paperList.map(data => {
                  return (
                    <div
                      key={data.id}
                      onClick={() => handlePaperCardClick(data)}
                    >
                      <RollingPaper
                        cardData={data}
                        editPermission={editPermission}
                        onDelete={() => handleDeletePaper(data.id)}
                      />
                    </div>
                  );
                })}
              {endData.current || (
                <FetchMore
                  loading={paperOffset !== 0 && isLoading}
                  setPage={setPaperOffset}
                />
              )}
            </S.PaperList>
          </S.PaperListWrap>
        </S.ContentWrap>
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
    background-color: ${({ background }) => background?.backgroundColor};
    background-image: url(${({ background }) =>
      background?.backgroundImageURL});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 90px;
    min-height: 100vh;
    max-height: 100%;
    min-width: 360px;
  `,
  PaperListWrap: styled.div`
    padding-inline: 24px;
    overflow-y: auto;
    height: 70vh;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  PaperList: styled.div`
    position: relative;
    margin: 0 auto;
    margin-bottom: 32px;
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
      top: -7%;
      right: 2%;
      margin: initial;
      width: initial;
    `}
  `,
  HeaderBox: styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: ${theme.colors.white};
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
  ContentWrap: styled.div`
    position: relative;
  `,
};
