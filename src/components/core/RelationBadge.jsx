import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
function RelationBadge({ relationship = '지인' }) {
  return <S.RelationBadge relationship={relationship}>{relationship}</S.RelationBadge>;
}

export default RelationBadge;

const S = {
  RelationBadge: styled.div`
    display: inline-block;
    border-radius: 4px;
    padding: 1px 8px;
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    line-height: ${({ theme }) => theme.lineHeights.base};
    background-color: ${({ relationship, theme }) => {
      switch (relationship) {
        case '지인':
          return theme.colors.orange[100];
        case '동료':
          return theme.colors.purple[100];
        case '가족':
          return theme.colors.green[100];
        case '친구':
          return theme.colors.blue[100];
        default:
          return '#fff';
      }
    }};
    color: ${({ relationship, theme }) => {
      switch (relationship) {
        case '지인':
          return theme.colors.orange[500];
        case '동료':
          return theme.colors.purple[600];
        case '가족':
          return theme.colors.green[500];
        case '친구':
          return theme.colors.blue[500];
        default:
          return '#fff';
      }
    }};
  `,
};
