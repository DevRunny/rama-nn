import React from "react";

export const ScrollTop = ({ visible, setVisible }) => {
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <i className="arrow-up" />
      </button>
    </>
  );
};
