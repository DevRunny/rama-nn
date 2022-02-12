import React from "react";
import { scrollToTop } from "./Hooks/useScrollToTop";

export const ScrollTop = ({ visible }) => {
  return (
    <>
      <button
        className="scroll-to-top"
        onClick={scrollToTop}
        style={{ display: visible ? "block" : "none" }}
      >
        <i className="scroll-to-top__arrow-up" />
      </button>
    </>
  );
};
