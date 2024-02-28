import styled from "styled-components";

function RecipientListBlock({data}) {
    let visibleState = [null, null, null].map((x, index) => {
        return index + 1 <= data.count;
    })
    let remainedCount = (Math.min(data.count - 3, 99)).toString() + "+";

    console.log(data.count > 3);

    return (
        <S.RecipientListBlock>
                {
                    visibleState.map((isVisible, index) => (
                        <S.ProfileBadge
                            key = {index}
                            $isVisible = {isVisible}
                            $imageUrl = {data.profileImageURL[index]}
                            $position = {(index) * 16 + 'px'}
                        />
                    ))
                }
            <S.RemainedCountBadge $isVisible = {data.count > 3}>{remainedCount}</S.RemainedCountBadge>
        </S.RecipientListBlock>
    )
}

export default RecipientListBlock;

const S = {
    RecipientListBlock:styled.div`
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      width: fit-content;
      height: 28px;
    `,

    ProfileBadge:styled.div`
      display: ${(props) => props.$isVisible ? 'flex' : 'none'};
      position: absolute;
      width: 28px;
      height: 28px;
      left: ${(props) => props.$position};
      border: 1.4px solid ${({theme}) => theme.colors.white};
      border-radius: 50px;
      background-size: cover;
      background-image: url(${(props) => props.$imageUrl});
    `,

    RemainedCountBadge:styled.div`
      display: ${(props) => props.$isVisible ? 'flex' : 'none'};
      position: absolute;
      justify-content: center;
      align-items: center;
      left: 48px;
      width: fit-content;
      height: 28px;
      border: 1px solid #E3E3E3;
      border-radius: 50px;
      padding: 5px 6px;
      
      background-color: ${({theme}) => theme.colors.white};
      font-size: ${({theme}) => theme.fontSizes.xxxs};
      font-family: ${({theme}) => theme.fontFamily.base};
      font-weight: 500;
    `
}