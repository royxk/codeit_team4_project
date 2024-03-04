import React, { useRef, useEffect } from "react";

const FetchMoreRecipients = ({ loading, setPage }) => {
  const fetchMoreTrigger = useRef(null);

  useEffect(() => {
    // Define the observer inside useEffect to ensure it's tied to the component's lifecycle
    const fetchMoreObserver = new IntersectionObserver((entries) => {
      const [{ isIntersecting }] = entries;
      if (isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });

    if (fetchMoreTrigger.current) {
      fetchMoreObserver.observe(fetchMoreTrigger.current);
    }

    // Cleanup function to unobserve when component unmounts or observer changes
    return () => {
      if (fetchMoreTrigger.current) {
        fetchMoreObserver.unobserve(fetchMoreTrigger.current);
      }
    };
  }, [setPage]);

  return <div id="fetchMore" ref={fetchMoreTrigger} />;
};

export default FetchMoreRecipients;
