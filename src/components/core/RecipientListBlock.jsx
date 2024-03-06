import styled from "styled-components";

function RecipientListBlock({ data }) {
  let visibleState = new Array(Math.min(3, data.messageCount || 0))
    .fill(null)
    .map((x, index) => {
      return index + 1 <= data.messageCount;
    });
  let remainedCount = Math.min(data.messageCount - 3, 99).toString() + "+";

  return (
    <S.RecipientListBlock>
      {visibleState.map((isVisible, index) => {
        let imageURL = data.recentMessages[index].profileImageURL;
        console.log(imageURL);
        return isVisible ? (
          <S.ProfileBadge
            key={index}
            $imageUrl={imageURL}
            $position={index * 16 + "px"}
          />
        ) : null;
      })}
      {data.messageCount > 3 ? (
        <S.RemainedCountBadge>{remainedCount}</S.RemainedCountBadge>
      ) : null}
    </S.RecipientListBlock>
  );
}

export default RecipientListBlock;

const S = {
  RecipientListBlock: styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 81px;
    height: 28px;
  `,

  ProfileBadge: styled.div`
    display: flex;
    position: absolute;
    width: 28px;
    height: 28px;
    left: ${(props) => props.$position};
    border: 1.4px solid ${({ theme }) => theme.colors.white};
    border-radius: 50px;
    background-size: cover;
    background-image: url(${(props) => props.$imageUrl});
    overflow: hidden;
  `,

  RemainedCountBadge: styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    left: 48px;
    width: fit-content;
    height: 28px;
    border: 1px solid #e3e3e3;
    border-radius: 50px;
    padding: 5px 6px;

    background-color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.xxxs};
    font-family: ${({ theme }) => theme.fontFamily.base};
    font-weight: 500;
  `,
};
