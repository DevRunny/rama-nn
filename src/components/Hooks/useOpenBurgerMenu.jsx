import { useState } from "react";

export const useOpenBurgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);
  return { openMenu, setOpenMenu };
};
