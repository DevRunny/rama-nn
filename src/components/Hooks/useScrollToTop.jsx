import { useState } from "react";

export const useScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  return { visible, setVisible };
};
