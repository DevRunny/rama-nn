import React, { useEffect } from "react";

export const ScrollTop = ({ visible, setVisible }) => {
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <i className="scroll-to-top__arrow-up" />
      </button>
    </>
  );
};
