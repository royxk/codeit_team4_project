import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
function ReactionBadge({emoji='😀', count=0}) {
  return (
    <S.ReactionBadge>
      <S.emoji>{emoji}</S.emoji>
      <S.count>{count}</S.count>
    </S.ReactionBadge>
  )
}

export default ReactionBadge

const S={
  ReactionBadge:styled.div`
    background: #0000008A;
    display: inline-flex;
    padding: 8px 12px;
    border-radius: 32px;
    align-items: center;
    justify-content: center;
    gap: 8px;
  `,
  emoji:styled.div`
    
  `,
  count:styled.div`
    font-size: ${({theme})=>theme.fontSizes.sm};
    font-weight: ${({theme})=>theme.fontWeights.regular};
    line-height: ${({theme})=>theme.lineHeights.base};
    color: ${({theme})=>theme.colors.white};
  `
}