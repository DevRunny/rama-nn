import { useEffect, useState } from "react";

export const useOpenModal = () => {
  const [ openItem, setOpenItem ] = useState(false);

  useEffect(() => {
    if (!openItem) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [ openItem ]);


  return { openItem, setOpenItem };
};
