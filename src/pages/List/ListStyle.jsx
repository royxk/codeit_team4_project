const S = {
  HomePageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-items: center;
    gap: 70px;
    width: 100%;
  `,
  ContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    padding: 0 40px;
    gap: 20px;

    ${media.widescreen`
      padding: 0 200px;
    `}
  `,
  NavContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 40px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.grey[200]};
    ${media.widescreen`
      padding: 0 200px;
      `}
  `,

  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 30px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,
  Title: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: bold;
    padding: 0 40px;
    ${media.widescreen`
      padding: 0 200px;
      `}
  `,

  ButtonCardsContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 20px;

    button {
      display: none;
    }

    ${media.widescreen`
      padding: 0 200px;
      button {
        display: inline-block;
      }
      `}
  `,

  CardsContainer: styled.div`
    padding-left: 20px;
    display: flex;

    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-snap-align: center;
    gap: 50px;
  `,
  Card: styled.div`
    flex: 0 0 auto;
    width: 250px;
    height: 100%;
  `,
};
