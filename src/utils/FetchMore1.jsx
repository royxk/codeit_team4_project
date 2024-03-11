import { set } from "lodash";
import React, { useEffect, useRef } from "react";

const FetchMore1 = ({ loading, setPage, slice }) => {
  const fetchMoreTrigger = useRef(null);

  useEffect(() => {
    const fetchMoreObserver = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          setPage((prev) => prev + 1);
          slice((prev) => prev + 5);
        }
      }
    );
    if (fetchMoreTrigger.current) {
      fetchMoreObserver.observe(fetchMoreTrigger.current);
    }
    return () => {
      if (fetchMoreTrigger.current) {
        fetchMoreObserver.unobserve(fetchMoreTrigger.current);
      }
    };
  }, [setPage, slice]);
  return (
    <div
      id="fetchMore1"
      ref={fetchMoreTrigger}
      className={loading ? "loading" : ""}
    />
  );
};

export default FetchMore1;
