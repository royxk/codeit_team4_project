import ReactionBadge from "../../core/ReactionBadge.jsx";
import styled from "styled-components";


function TopEmojiBlock ({...props}) {
    console.log(props);
    const emojiData = props.emojiData;
    const maxLength = props.maxLength;

    return (
        <S.EmojiWrapper>
            {
                new Array(Math.min(maxLength, Object.keys(emojiData).length)).fill(0).map((x, index) => {
                    let emoji = emojiData[index].emoji;
                    let count = emojiData[index].count;
                    return <ReactionBadge key={index} emoji={emoji} count={count} />
                })
            }
        </S.EmojiWrapper>
    )
}

export default TopEmojiBlock;

const S = {
    EmojiWrapper:styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: fit-content;
      height: 36px;
      gap: 8px;
    `,
}