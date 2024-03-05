export const handleShareKakao = (data) => {
    if(window.Kakao) {
        const kakao = window.Kakao;

        kakao.Share.sendDefault({
            objectType: "feed",
            content: {
                title: `${data.name}님의 롤링 페이퍼`,
                description: '',
                imageUrl: data.backgroundImageURL || '',
                link: {
                    mobileWebUrl: `http://localhost:5173/post/${data.id}`,
                    webUrl: `http://localhost:5173/post/${data.id}`
                },
            },
            social: {
                likeCount: data.reactionCount,
                commentCount: data.messageCount,
                sharedCount: 0,
            },
            buttons: []
        })
    }
}