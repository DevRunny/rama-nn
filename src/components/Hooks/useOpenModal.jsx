import { useState } from "react";

export const useOpenModal = () => {
  const [openItem, setOpenItem] = useState(null);
  return { openItem, setOpenItem };
};
