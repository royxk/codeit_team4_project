import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import RollingPaper from '../components/core/RollingPaper';
import { media } from '../styles/utils/mediaQuery';
import Modal from '../components/modal/Modal';
import { getRecipientMessages } from '../apiFetcher/recipients/getRecipientMessages';

const MODAL_INIT = {
  open: false,
  data: {},
};

function Papers() {
  const [ModalInfo, setModalInfo] = useState(MODAL_INIT);
  const [paperList, setPaperList] = useState([]);
  const { id } = useParams();

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
          {paperList &&
            paperList.map((data) => {
              return (
                <div key={data.id} onClick={() => handlePaperCardClick(data)}>
                  <RollingPaper cardData={data} />
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
    padding: 24px;
    min-height: 100vh;
    max-height: 100%;
    min-width: 360px;
  `,
  PaperList: styled.div`
    width: 1200px;
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
};
