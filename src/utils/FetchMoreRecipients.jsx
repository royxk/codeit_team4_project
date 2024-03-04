import React, { useRef, useEffect } from "react";

const FetchMoreRecipients = ({ loading, setPage }) => {
  const fetchMoreTrigger = useRef(null);
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) {
      setPage((prev) => prev + 1);
    }
  });

  useEffect(() => {
    fetchMoreObserver.observe(fetchMoreTrigger.current);
    return () => {
      fetchMoreObserver.unobserve(fetchMoreTrigger.current);
    };
  }, []);

  return (
    <div
      id="fetchMore"
      ref={fetchMoreTrigger}
      className={loading ? "loading" : ""}
    ></div>
  );
};

export default FetchMoreRecipients;
