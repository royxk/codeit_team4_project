import { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import { getRecipientMessages } from '../apiFetcher/recipients/getRecipientMessages';
import RollingPaper from '../components/core/RollingPaper';
import { media } from '../styles/utils/mediaQuery';
import Modal from '../components/modal/Modal';
import SmallButton from '../components/core/Button/SmallButton';

const MODAL_INIT = {
  open: false,
  data: {},
};
// TODO: 롤링페이퍼 클릭하고 back color넘겨주면 받아서 적용
// TODO: 4팀 데이터 추가가능해지면 삭제기능 만들기
function Papers() {
  const [ModalInfo, setModalInfo] = useState(MODAL_INIT);
  const [paperList, setPaperList] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const editPermission = location.pathname.includes('/edit');

  const handlePaperCardClick = (data) => {
    setModalInfo({
      open: true,
      data: data,
    });
  };

  const handleGetPaperData = useCallback(async () => {
    const response = await getRecipientMessages(id, 6);
    const { next, count, results } = response.data;
    setPaperList(results);
  }, [id]);

  useEffect(() => {
    handleGetPaperData();
    setModalInfo(false);
  }, [handleGetPaperData]);
  return (
    <>
      {ModalInfo.open && <Modal cardData={ModalInfo.data} onClose={() => setModalInfo(false)} />}
      <S.Container>
        <S.PaperList>
          {editPermission && (
            <S.DeleteBtn>
              <SmallButton text="삭제하기" />
            </S.DeleteBtn>
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
    flex-direction: column;
    padding: 24px;
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
};
