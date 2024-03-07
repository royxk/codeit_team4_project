import { useRef, useEffect } from 'react';
import styled from 'styled-components';

const FetchMore = ({ loading, setPage }) => {
  const fetchMoreTrigger = useRef(null);
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) setPage((prev) => prev + 7);
  });

  useEffect(() => {
    fetchMoreObserver.observe(fetchMoreTrigger.current);
    return () => {
      fetchMoreObserver.disconnect(fetchMoreTrigger);
    };
  }, []);

  return <S.Observer className={loading ? 'loading' : ''} id="fetchMore" ref={fetchMoreTrigger} />;
};

export default FetchMore;

const S = {
  Observer: styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    &.loading {
      display: block;
      margin-top: 10px;
      text-align: center;
      line-height: 28px;
      background-color: transparent;
    }
    &.loading:after {
      content: ' ';
    }
  `,
};
