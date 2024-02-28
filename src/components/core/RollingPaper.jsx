import styled from 'styled-components';
import theme from '../../styles/theme';
import RelationBadge from '../core/RelationBadge';
import { media } from '../../styles/utils/mediaQuery';

const CARD_DATA_INIT = {
  id: 0,
  recipientId: 0,
  sender: '테스트',
  profileImageURL: 'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
  relationship: '지인',
  content: '테스트입니다',
  font: 'Pretendard',
  createdAt: '2023-11-01T08:05:25.399056Z',
};

// eslint-disable-next-line react/prop-types
function RollingPaper({ cardData = CARD_DATA_INIT }) {
  return (
    <S.CardContainer>
      <S.FlexColum>
        <div>
          <S.CardHeader>
            <S.FlexBox>
              <S.ProfileImg>
                <img src={cardData.profileImageURL} alt="profile" />
              </S.ProfileImg>
              <S.FlexColum>
                <S.Sender>
                  From. <span>{cardData.sender}</span>
                </S.Sender>
                <div>
                  <RelationBadge relationship={cardData.relationship} />
                </div>
              </S.FlexColum>
            </S.FlexBox>
          </S.CardHeader>
          <S.CardContent>{cardData.content}</S.CardContent>
        </div>
        <S.CreateAt>{cardData.createdAt.substring(0, 10)}</S.CreateAt>
      </S.FlexColum>
    </S.CardContainer>
  );
}

export default RollingPaper;

const S = {
  CardContainer: styled.div`
    background-color: ${theme.colors.white};
    box-shadow: 0px 2px 12px 0px #00000014;
    border-radius: 16px;
    padding: 25px;
    width: 100%;
    height: 230px;
    ${media.tablet`
      height: 280px
    `}
  `,
  CardHeader: styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.grey[200]};
    padding-bottom: 16px;
    margin-bottom: 8px;
  `,
  CardContent: styled.div`
    width: 100%;
    height: 65px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    font-size: ${theme.fontSizes.xs};
    line-height: ${theme.lineHeights.lg};
    ${media.tablet`
      font-size: ${theme.fontSizes.base};
      line-height: ${theme.lineHeights.xxl}
    `}
  `,
  Sender: styled.span`
    font-size: ${theme.fontSizes.sm};
    line-height: ${theme.lineHeights.lg};
    span {
      font-weight: ${theme.fontWeights.bold};
      font-family: ${(cardData) => cardData.font};
    }
    ${media.tablet`
      font-size: ${theme.fontSizes.lg}
    `}
  `,
  CreateAt: styled.div`
    font-size: ${theme.fontSizes.xxxs};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.lineHeights.sm};
    color: ${theme.colors.grey[400]};
    margin-top: 12px;
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
    height: 100%;
    & > div {
      width: 100%;
    }
  `,
};
